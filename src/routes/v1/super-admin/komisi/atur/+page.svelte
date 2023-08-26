<script type="text/javascript">
	import Sidebar from '../../../../../components/sidebar.svelte';
	import Navbar from '../../../../../components/navbar.svelte';
	import { onMount } from 'svelte';
	import {fly, scale} from 'svelte/transition'
	import ApiController from '../../../../../ApiController';
	import toDate from '../../../../../CustomTime';

	let status = false
	let dataPerum = null
	let dataTipe = null
	let dataAgensi = null
	let isAkad = false
	let dataAturan = null
	let popUpSection = ''
	let activeData = null
	let editState = false

	let createAlert = (inputId, msg) => {
		if(document.getElementById(`alert-${inputId}`)){
			document.getElementById(`alert-${inputId}`).remove()
		}

		let parent = document.getElementById(inputId).parentElement
		let text = document.createElement('p')
		text.id = `alert-${inputId}`
		text.textContent = msg
		text.style.color = "red"
		text.style.fontSize = "12px"
		parent.appendChild(text)

		document.getElementById(inputId).addEventListener('change', () => {
			if(document.getElementById(`alert-${inputId}`)){
				document.getElementById(`alert-${inputId}`).remove()
			}
		})
	}

	let getPerum = () => {
		ApiController({
			method: "GET",
			endpoint: 'perumahan'
		}).then(response => {
			dataPerum = response.data.data
			getTipe(dataPerum[0].id_perumahan)
		})
	}

	let getTipe = (id_perum) => {
		ApiController({
			method: "GET",
			endpoint: `perumahan/${id_perum}/tipe`
		}).then(response => {
			dataTipe = response.data.data
		})
	}

	let getAgensi = () => {
		ApiController({
			method: "GET",
			endpoint: `agensi`
		}).then(response => {
			dataAgensi = response.data.data
		})
	}

	let addKomisi = () => {
		if(document.getElementById('tanggal_berlaku').value == ''){
			createAlert('tanggal_berlaku', 'Mohon isi tanggal berlaku!')
			return
		}

		if(document.getElementById('tipe_unit').value == ''){
			createAlert('tipe_unit', 'Mohon pilih Tipe Unit!')
			return
		}

		if(document.getElementById('agensi').value == ''){
			createAlert('agensi', 'Mohon pilih Agensi!')
			return
		}

		if(document.getElementById('nominal-agensi').value == ''){
			createAlert('nominal-agensi', 'Mohon beri nominal Agensi!')
			return
		}

		if(document.getElementById('nominal-head-marketing').value == ''){
			createAlert('nominal-head-marketing', 'Mohon beri nominal Head Marketing!')
			return
		}

		if(document.getElementById('nominal-marketing').value == ''){
			createAlert('nominal-marketing', 'Mohon beri nominal Marketing!')
			return
		}

		let data = {
			perumahan: parseInt(document.getElementById('perum').value),
			komisi_1_tanggal_berlaku: document.getElementById('tanggal_berlaku').value,
			komisi_1_jenis_komisi: document.getElementById('tipe').value,
			komisi_1_tipe: document.getElementById('tipe_unit').value,
			komisi_1_id_agensi: document.getElementById('agensi').value,
			komisi_1_nominal_agensi: parseInt(document.getElementById('nominal-agensi').value),
			komisi_1_nominal_penerima_1: parseInt(document.getElementById('nominal-head-marketing').value),
			komisi_1_nominal_penerima_2: parseInt(document.getElementById('nominal-marketing').value),
		}

		if(isAkad){
			if(document.getElementById('nominal-ams').value == ''){
				createAlert('nominal-ams', 'Mohon beri nominal AMS!')
				return
			}	

			data.komisi_1_nominal_penerima_3 = parseInt(document.getElementById('nominal-ams').value)
		}

		ApiController({
			method:"POST",
			endpoint: `komisi/atur`,
			datas: data
		}).then(response => {
			if(response.data.message == "Komisi Updated."){
				popUpSection = 'atur-success'
			}else{
				popUpSection = 'atur-fail'
			}

			document.getElementById('pop-up').style.display = 'flex'
		}).catch(err => {
			console.log(err)
			popUpSection = 'atur-fail'
			document.getElementById('pop-up').style.display = 'flex'
		})
	}

	let toIDR = value => {
		return new Intl.NumberFormat('id-ID', {style: 'currency', currency : "IDR"}).format(value).replace(/\,00$/, '')
	}

	let getAturan = () => {
		ApiController({
			method:"GET",
			endpoint:'komisi-berlaku'
		}).then(response => {
			dataAturan = response.data.data
		})
	}

	let hapusAturan = (id) => {
		ApiController({
			method:"POST",
			endpoint:`komisi-berlaku/${id}/delete`
		}).then(response => {
			if(response.data.message == "Aturan Komisi dihapus."){
				popUpSection = 'hapus-success'
			}else{
				popUpSection = 'hapus-fail'
			}
		}).catch(err => {
			console.log(err)
			popUpSection = 'hapus-fail'
		})
	}

	onMount(async () => {
		getPerum()
		getAgensi()
		getAturan()
	})

</script>

<div id="after-login-layout">
	<Navbar/>
	<div class="flex">
		<Sidebar statusPointer="Komisi" pagePointer="admin"/>
		<div class="w-80 content">
			<div class="flex flex-direction-col flex-gap-large">
				<div class="flex  flex-direction-col flex-between-horizontal flex-gap-semi-small w-100">
					<div class="title-content">Aturan Komisi</div>
					<div class="flex flex-gap-regular flex-center-vertical">
						<div class="text-breadcrumb">Komisi</div>
						<img src="/images/icons/Arrow_Right.svg" alt="">
						<div class="text-breadcrumb-active">Kelola Aturan Komisi</div>
					</div>
				</div>
				<div class="card w-70" in:fly={{ y: -20, duration: 600 }}>
					<div class="flex flex-direction-col flex-gap-semi-large">
						<div class="flex flex-center-vertical">
							{#if editState}
							<div class="title-card-tambah-nup">Edit Aturan Komisi</div>
							{:else}
							<div class="title-card-tambah-nup">Buat Aturan Komisi</div>
							{/if}
						</div>
						<div class="flex flex-gap-regular">
							<div class="flex flex-direction-col flex-gap-small w-15">
								<div class="title-input-nup">Pilih Perum</div>
								<select class="select-nup" id="perum" on:change={() => {
									getTipe(document.getElementById('perum').value)
								}} disabled={editState ? true : false}>
									{#if dataPerum != null}
									{#each dataPerum as d}
									{#if editState}
									{#if activeData.perumahan.id_perumahan == d.id_perumahan}
									<option value="{d.id_perumahan}" selected>{d.kode}</option>
									{:else}
									<option value="{d.id_perumahan}">{d.kode}</option>
									{/if}
									{:else}
									<option value="{d.id_perumahan}">{d.kode}</option>
									{/if}
									{/each}
									{/if}
								</select>
							</div>
							<div class="flex flex-direction-col flex-gap-small w-40">
								<div class="title-input-nup">Tipe Komisi</div>
								<select class="select-nup" id="tipe" on:change={() => {
									if(document.getElementById('tipe').value == 'Akad'){
										isAkad = true
									}else{
										isAkad = false
									}
								}} disabled={editState ? true : false}>
									{#if editState}
									<option value="Closing Fee" selected={activeData.jenis_komisi == 'Closing Fee' ? true : false}>Closing Fee</option>
									<option value="Down Payment" selected={activeData.jenis_komisi == 'Down Payment' ? true : false}>Down Payment</option>
									<option value="Akad" selected={activeData.jenis_komisi == 'Akad' ? true : false}>Akad</option>
									{:else}
									<option value="Closing Fee">Closing Fee</option>
									<option value="Down Payment">Down Payment</option>
									<option value="Akad">Akad</option>
									{/if}
								</select>
							</div>
							<div class="flex flex-direction-col flex-gap-small w-60">
								<div class="title-input-nup">Tanggal Berlaku</div>
								<input type="date" class="input-nup" id="tanggal_berlaku" value="{editState ? activeData.tanggal_berlaku : ''}">
							</div>
						</div>
						<div class="flex flex-direction-col flex-gap-semi-small">
							<div class="title-input-nup">Nominal Berdasarkan Tipe Unit</div>
							<div class="card-secondary flex flex-direction-col flex-gap-semi-large">
								<!-- <div class="title-input-nup">Komisi</div> -->
								<div class="flex flex-gap-regular">
									<div class="flex flex-direction-col flex-gap-small w-25">
										<div class="title-input-nup">Pilih Tipe Unit</div>
										<input type="text" class="input-nup" id="tipe_unit" list="listTipe" value="{editState ? activeData.tipe : ''}" disabled={editState ? true : false}>
										<datalist id="listTipe">
											{#if dataTipe != null}
											{#each dataTipe as d}
											<option value="{d.tipe}"/>
											{/each}
											{/if}
										</datalist>
									</div>
								</div>
								<div class="flex flex-gap-regular">
									<div class="flex flex-direction-col flex-gap-small {isAkad ? 'w-25' : 'w-50'}">
										<div class="title-input-nup">Agensi</div>
										<select class="select-nup" id="agensi">
											<option value="" selected hidden>Pilih Agensi</option>
											{#if dataAgensi != null}
											{#each dataAgensi as d}
											{#if editState}
											{#if activeData.agensi.id_user == d.id_user}
											<option value="{d.id_user}" selected>{d.nama}</option>
											{:else}
											<option value="{d.id_user}">{d.nama}</option>
											{/if}
											{:else}
											<option value="{d.id_user}">{d.nama}</option>
											{/if}
											{/each}
											{/if}
										</select>
									</div>
									<div class="flex flex-direction-col flex-gap-small {isAkad ? 'w-25' : 'w-50'}">
										<div class="title-input-nup">Head Marketing</div>
										<input type="text" name="" class="input-nup" id="head-marketing" disabled placeholder="Sesuai Unit">
									</div>
									<div class="flex flex-direction-col flex-gap-small {isAkad ? 'w-25' : 'w-50'}">
										<div class="title-input-nup">Marketing</div>
										<input type="text" name="" class="input-nup" id="marketing" disabled placeholder="Sesuai Unit">
									</div>
									{#if isAkad}
									<div class="flex flex-direction-col flex-gap-small w-25">
										<div class="title-input-nup">AMS</div>
										<input type="text" name="" class="input-nup" id="ams" disabled placeholder="Sesuai Unit"> 
									</div>
									{/if}
								</div>
								<div class="flex flex-gap-regular">
									<div class="flex flex-direction-col flex-gap-small {isAkad ? 'w-25' : 'w-50'}">
										<div class="title-input-nup">Nominal Agensi</div>
										<input type="number" name="" class="input-nup" id="nominal-agensi" value="{editState ? activeData.nominal_agensi : ''}">
									</div>
									<div class="flex flex-direction-col flex-gap-small {isAkad ? 'w-25' : 'w-50'}">
										<div class="title-input-nup">Nominal Head Marketing</div>
										<input type="number" name="" class="input-nup" id="nominal-head-marketing" value="{editState ? activeData.nominal_penerima_1 : ''}">
									</div>
									<div class="flex flex-direction-col flex-gap-small {isAkad ? 'w-25' : 'w-50'}">
										<div class="title-input-nup">Nominal Marketing</div>
										<input type="number" name="" class="input-nup" id="nominal-marketing" value="{editState ? activeData.nominal_penerima_2 : ''}">
									</div>
									{#if isAkad}
									<div class="flex flex-direction-col flex-gap-small w-25">
										<div class="title-input-nup">Nominal AMS</div>
										<input type="number" name="" class="input-nup" id="nominal-ams" value="{editState ? activeData.nominal_penerima_3 : ''}">
									</div>
									{/if}
								</div>
							</div>
						</div>
						<div class="flex flex-end-horizontal flex-gap-regular w-100">
							<button class="btn-outline flex flex-center-vertical flex-gap-small" on:click={() => window.location.reload()}>
								<span>Batal</span>
							</button>
							<button class="btn-fill flex flex-center-vertical flex-gap-small" on:click={() => addKomisi()}>
								{#if editState}
								<span>Simpan Perubahan Aturan</span>
								{:else}
								<span>Simpan Aturan</span>
								{/if}
							</button>
						</div>
					</div>
				</div>
				<div class="flex flex-between-horizontal flex-center-vertical w-100">
					<div class="title-content">Komisi Berlaku</div>
				</div>
				<div class="flex flex-direction-col flex-gap-regular">
					<div class="flex">
						<select id="select-perum" class="select-col-2 w-25">
							<option selected value="">Semua Perum</option>
							{#if dataPerum != null}
							{#each dataPerum as perum}
								<option value="{perum.id_perumahan}">{perum.kode}</option>
							{/each}
							{/if}
						</select>
					</div>
					<div class="flex flex-gap-semi-large w-100">
						<input type="text" placeholder="Cari Blok" class="input-col-2 w-10" id="filter-blok">
						<input type="text" placeholder="Cari Tipe" class="input-col-2 w-10" id="filter-tipe">
						<input type="text" placeholder="Cari Pricelist" class="input-col-2 w-10" id="filter-pricelist">
						<div class="flex flex-gap-semi-large w-15">
							<select class="select-col-3 w-100">
								<option selected value="">Semua Jenis Komisi</option>
								<option>Closing Fee</option>
								<option>Down Payment</option>
								<option>Akad</option>
							</select>
						</div>
					</div>
					<div class="scroll-x flex flex-direction-col flex-gap-regular">
						<div class="card-head w-content-2 height-fit">
							<div class="flex">
								<div class="flex flex-gap-small flex-center-vertical w-2 border-separate">
									<div class="text-drop-card">No</div>
									<img src="/images/icons/Arrow.svg" alt="">
								</div>
								<div class="flex flex-gap-small flex-center-vertical flex-center-horizontal w-5 border-separate">
									<div class="text-drop-card">Perum</div>
									<img src="/images/icons/Arrow.svg" alt="">
								</div>
								<div class="flex flex-gap-small flex-center-vertical flex-center-horizontal w-5 border-separate">
									<div class="text-drop-card">Blok</div>
									<img src="/images/icons/Arrow.svg" alt="">
								</div>
								<div class="flex flex-gap-small flex-center-vertical flex-center-horizontal w-5 border-separate">
									<div class="text-drop-card">Tipe</div>
									<img src="/images/icons/Arrow.svg" alt="">
								</div>
								<div class="flex flex-gap-small flex-center-vertical flex-center-horizontal w-5 border-separate">
									<div class="text-drop-card">Lantai</div>
									<img src="/images/icons/Arrow.svg" alt="">
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-10 border-separate">
									<div class="text-drop-card">Harga Unit</div>
									<img src="/images/icons/Arrow.svg" alt="">
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-10 border-separate">
									<div class="text-drop-card">Pricelist</div>
									<img src="/images/icons/Arrow.svg" alt="">
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-10 border-separate">
									<div class="text-drop-card">Jenis Komisi</div>
									<img src="/images/icons/Arrow.svg" alt="">
								</div>
								<div class="flex flex-direction-col flex-center-vertical w-15 border-separate-2">
									<div class="flex w-100 flex-center-horizontal border-bottom-seperate">
										<div class="text-drop-card padding-spec-nup-1">Penerima 1</div>
									</div>
									<div class="flex w-100">
										<div class="flex flex-center-horizontal w-50 border-separate-2">
											<div class="text-drop-card padding-spec-nup-1">Pihak</div>
										</div>
										<div class="flex flex-center-horizontal w-50 border-separate-2">
											<div class="text-drop-card padding-spec-nup-1">Nominal</div>
										</div>
									</div>
								</div>
								<div class="flex flex-direction-col flex-center-vertical w-15 border-separate-2">
									<div class="flex w-100 flex-center-horizontal border-bottom-seperate">
										<div class="text-drop-card padding-spec-nup-1">Penerima 2</div>
									</div>
									<div class="flex w-100">
										<div class="flex flex-center-horizontal w-50 border-separate-2">
											<div class="text-drop-card padding-spec-nup-1">Pihak</div>
										</div>
										<div class="flex flex-center-horizontal w-50 border-separate-2">
											<div class="text-drop-card padding-spec-nup-1">Nominal</div>
										</div>
									</div>
								</div>
								<div class="flex flex-direction-col flex-center-vertical w-15 border-separate-2">
									<div class="flex w-100 flex-center-horizontal border-bottom-seperate">
										<div class="text-drop-card padding-spec-nup-1">Penerima 3</div>
									</div>
									<div class="flex w-100">
										<div class="flex flex-center-horizontal w-50 border-separate-2">
											<div class="text-drop-card padding-spec-nup-1">Pihak</div>
										</div>
										<div class="flex flex-center-horizontal w-50 border-separate-2">
											<div class="text-drop-card padding-spec-nup-1">Nominal</div>
										</div>
									</div>
								</div>
								<div class="flex flex-direction-col flex-center-vertical w-15 border-separate-2">
									<div class="flex w-100 flex-center-horizontal border-bottom-seperate">
										<div class="text-drop-card padding-spec-nup-1">Penerima 4</div>
									</div>
									<div class="flex w-100">
										<div class="flex flex-center-horizontal w-50 border-separate-2">
											<div class="text-drop-card padding-spec-nup-1">Pihak</div>
										</div>
										<div class="flex flex-center-horizontal w-50 border-separate-2">
											<div class="text-drop-card padding-spec-nup-1">Nominal</div>
										</div>
									</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-5 border-separate">
									<div class="text-drop-card">Tanggal Berlaku</div>
									<img src="/images/icons/Arrow.svg" alt="">
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-5 border-separate">
									<div class="text-drop-card">Terakhir Diubah</div>
									<img src="/images/icons/Arrow.svg" alt="">
								</div>
								<div class="flex flex-gap-small flex-center-vertical flex-center-horizontal w-5 border-non-separate">
									<div class="text-drop-card">Aksi</div>
									<img src="/images/icons/Arrow.svg" alt="">
								</div>
							</div>
						</div>
						{#if dataAturan != null}
						{#if dataAturan.length > 0}
						{#each dataAturan as d, i}
						<div class="card-head w-content-2 height-fit">
							<div class="flex">
								<div class="flex flex-gap-small flex-center-vertical flex-center-horizontal w-2 no-border-table">
									<div class="text-drop-card">{i+1}</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical flex-center-horizontal w-5 no-border-table">
									<div class="text-drop-card">{d.perumahan.kode}</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical flex-center-horizontal w-5 no-border-table">
									<div class="text-drop-card">{d.blok.blok}</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical flex-center-horizontal w-5 no-border-table">
									<div class="text-drop-card">{d.tipe}</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical flex-center-horizontal w-5 no-border-table">
									<div class="text-drop-card">{d.lantai}</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-10 no-border-table">
									<div class="text-drop-card">{toIDR(d.harga_unit)}</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-10 no-border-table">
									<div class="text-drop-card">{d.pricelist}</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-10 no-border-table">
									<div class="text-drop-card">{d.jenis_komisi}</div>
								</div>
								<div class="flex flex-direction-col flex-center-vertical flex-center-horizontal w-15">
									<div class="flex w-100 flex-center-vertical">
										<div class="flex flex-center-horizontal flex-center-vertical w-50">
											<div class="text-drop-card padding-spec-nup-1 ">{d.agensi.nama} ({d.penerima_agensi})</div>
										</div>
										<div class="flex flex-center-horizontal flex-center-vertical w-50">
											<div class="text-drop-card padding-spec-nup-1 ">{toIDR(d.nominal_agensi)}</div>
										</div>
									</div>
								</div>
								<div class="flex flex-direction-col flex-center-vertical flex-center-horizontal w-15">
									<div class="flex w-100 flex-center-vertical">
										<div class="flex flex-center-horizontal flex-center-vertical w-50">
											<div class="text-drop-card padding-spec-nup-1 ">{d.penerima_penerima_1}</div>
										</div>
										<div class="flex flex-center-horizontal flex-center-vertical w-50">
											<div class="text-drop-card padding-spec-nup-1 ">{toIDR(d.nominal_penerima_1)}</div>
										</div>
									</div>
								</div>
								<div class="flex flex-direction-col flex-center-vertical flex-center-horizontal w-15">
									<div class="flex w-100 flex-center-vertical">
										<div class="flex flex-center-horizontal flex-center-vertical w-50">
											<div class="text-drop-card padding-spec-nup-1 ">{d.penerima_penerima_2}</div>
										</div>
										<div class="flex flex-center-horizontal flex-center-vertical w-50">
											<div class="text-drop-card padding-spec-nup-1 ">{toIDR(d.nominal_penerima_2)}</div>
										</div>
									</div>
								</div>
								<div class="flex flex-direction-col flex-center-vertical flex-center-horizontal w-15">
									<div class="flex w-100 flex-center-vertical">
										<div class="flex flex-center-horizontal flex-center-vertical w-50">
											<div class="text-drop-card padding-spec-nup-1 ">{d.penerima_penerima_3}</div>
										</div>
										<div class="flex flex-center-horizontal flex-center-vertical w-50">
											<div class="text-drop-card padding-spec-nup-1 ">{toIDR(d.nominal_penerima_3)}</div>
										</div>
									</div>
								</div>
								<div class="flex flex-direction-row flex-gap-small flex-center-vertical flex-center-horizontal w-5 no-border-table">
									<div class="text-drop-card">{toDate(d.tanggal_berlaku)}</div>
								</div>
								<div class="flex flex-direction-row flex-gap-small flex-center-vertical flex-center-horizontal w-5 no-border-table">
									<div class="text-drop-card">{toDate(d.tanggal_terakhir_diubah)}</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical flex-center-horizontal w-5 no-border-table">
									<!-- svelte-ignore a11y-click-events-have-key-events -->
									<img src="/images/icons/Edit.svg" alt="" on:click={() => {
										activeData = d
										editState = true
									}} style="cursor: pointer;">
									<!-- svelte-ignore a11y-click-events-have-key-events -->
									<img src="/images/icons/Delete.svg" alt="" style="cursor: pointer;" on:click={() => {
										popUpSection = 'hapus-promp'
										activeData = d
										document.getElementById('pop-up').style.display = 'flex'
									}}>
								</div>
							</div>
						</div>
						{/each}
						{:else}
						<div class="card-head w-content-2 height-fit">
							<div class="flex">
								<div class="flex flex-gap-small flex-center-vertical flex-center-horizontal w-5 no-border-table">
									<div class="text-drop-card">Tidak ada Data!</div>
								</div>
							</div>
						</div>
						{/if}
						{/if}
					</div>
					<div class="card w-100 height-fit">
						<div class="flex flex-between-horizontal">
							<div class="flex flex-gap-regular flex-center-vertical">
								<div class="text-display-sort">Menampilkan</div>
								<select class="select-sort">
									<option>10</option>
								</select>
								<div class="text-display-sort">dari <span class="bold-number">10</span> data Cicilan</div>
							</div>
							<div class="flex flex-gap-regular flex-center-vertical">
								<div class="flex flex-center-vertical flex-center-horizontal border-pagination"><img src="/images/icons/Arrow_Left.svg" alt=""></div>
								<div class="flex flex-center-vertical flex-center-horizontal border-pagination"><div class="text-display-sort bold-number" alt="">1</div></div>
								<div class="flex flex-center-vertical flex-center-horizontal border-pagination"><img src="/images/icons/Arrow_Right.svg" alt=""></div>
							</div>
						</div>
					</div>
				</div>
				<!-- <div class="flex flex-between-horizontal flex-center-vertical w-100">
					<div class="title-content">History Perubahan Komisi</div>
				</div>
				<div class="flex flex-direction-col flex-gap-regular">
					<div class="flex">
						<select id="select-perum" class="select-col-2 w-25">
							<option selected value="">Semua Perum</option>
							{#if dataPerum != null}
							{#each dataPerum as perum}
								<option value="{perum.id_perumahan}">{perum.kode}</option>
							{/each}
							{/if}
						</select>
					</div>
					<div class="flex flex-gap-semi-large w-100">
						<input type="text" placeholder="Cari Blok" class="input-col-2 w-10" id="filter-blok">
						<input type="text" placeholder="Cari Tipe" class="input-col-2 w-10" id="filter-tipe">
						<input type="text" placeholder="Cari Pricelist" class="input-col-2 w-10" id="filter-pricelist">
						<div class="flex flex-gap-semi-large w-15">
							<select class="select-col-3 w-100">
								<option selected value="">Semua Jenis Komisi</option>
								<option>Closing Fee</option>
								<option>Down Payment</option>
								<option>Akad</option>
							</select>
						</div>
					</div>
					<div class="scroll-x flex flex-direction-col flex-gap-regular">
						<div class="card-head w-content-2 height-fit">
							<div class="flex">
								<div class="flex flex-gap-small flex-center-vertical w-2 border-separate">
									<div class="text-drop-card">No</div>
									<img src="/images/icons/Arrow.svg" alt="">
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-5 border-separate">
									<div class="text-drop-card">Perum</div>
									<img src="/images/icons/Arrow.svg" alt="">
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-5 border-separate">
									<div class="text-drop-card">Blok</div>
									<img src="/images/icons/Arrow.svg" alt="">
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-5 border-separate">
									<div class="text-drop-card">Tipe</div>
									<img src="/images/icons/Arrow.svg" alt="">
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-5 border-separate">
									<div class="text-drop-card">Lantai</div>
									<img src="/images/icons/Arrow.svg" alt="">
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-10 border-separate">
									<div class="text-drop-card">Harga Unit</div>
									<img src="/images/icons/Arrow.svg" alt="">
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-10 border-separate">
									<div class="text-drop-card">Pricelist</div>
									<img src="/images/icons/Arrow.svg" alt="">
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-10 border-separate">
									<div class="text-drop-card">Jenis Komisi</div>
									<img src="/images/icons/Arrow.svg" alt="">
								</div>
								<div class="flex flex-direction-col flex-center-vertical w-15 border-separate-2">
									<div class="flex w-100 flex-center-horizontal border-bottom-seperate">
										<div class="text-drop-card padding-spec-nup-1">Penerima 1</div>
									</div>
									<div class="flex w-100">
										<div class="flex flex-center-horizontal w-50 border-separate-2">
											<div class="text-drop-card padding-spec-nup-1">Pihak</div>
										</div>
										<div class="flex flex-center-horizontal w-50 border-separate-2">
											<div class="text-drop-card padding-spec-nup-1">Nominal</div>
										</div>
									</div>
								</div>
								<div class="flex flex-direction-col flex-center-vertical w-15 border-separate-2">
									<div class="flex w-100 flex-center-horizontal border-bottom-seperate">
										<div class="text-drop-card padding-spec-nup-1">Penerima 2</div>
									</div>
									<div class="flex w-100">
										<div class="flex flex-center-horizontal w-50 border-separate-2">
											<div class="text-drop-card padding-spec-nup-1">Pihak</div>
										</div>
										<div class="flex flex-center-horizontal w-50 border-separate-2">
											<div class="text-drop-card padding-spec-nup-1">Nominal</div>
										</div>
									</div>
								</div>
								<div class="flex flex-direction-col flex-center-vertical w-15 border-separate-2">
									<div class="flex w-100 flex-center-horizontal border-bottom-seperate">
										<div class="text-drop-card padding-spec-nup-1">Penerima 3</div>
									</div>
									<div class="flex w-100">
										<div class="flex flex-center-horizontal w-50 border-separate-2">
											<div class="text-drop-card padding-spec-nup-1">Pihak</div>
										</div>
										<div class="flex flex-center-horizontal w-50 border-separate-2">
											<div class="text-drop-card padding-spec-nup-1">Nominal</div>
										</div>
									</div>
								</div>
								<div class="flex flex-direction-col flex-center-vertical w-15 border-separate-2">
									<div class="flex w-100 flex-center-horizontal border-bottom-seperate">
										<div class="text-drop-card padding-spec-nup-1">Penerima 4</div>
									</div>
									<div class="flex w-100">
										<div class="flex flex-center-horizontal w-50 border-separate-2">
											<div class="text-drop-card padding-spec-nup-1">Pihak</div>
										</div>
										<div class="flex flex-center-horizontal w-50 border-separate-2">
											<div class="text-drop-card padding-spec-nup-1">Nominal</div>
										</div>
									</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-5 border-separate">
									<div class="text-drop-card">Diubah Pada</div>
									<img src="/images/icons/Arrow.svg" alt="">
								</div>
							</div>
						</div>
						<div class="card-head w-content-2 height-fit">
							<div class="flex">
								<div class="flex flex-gap-small flex-center-vertical flex-center-horizontal w-2 no-border-table">
									<div class="text-drop-card">1</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-5 no-border-table">
									<div class="text-drop-card">NMG</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-5 no-border-table">
									<div class="text-drop-card">AA1</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-5 no-border-table">
									<div class="text-drop-card">36/104</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-5 no-border-table">
									<div class="text-drop-card">1</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-10 no-border-table">
									<div class="text-drop-card">Rp. 500.000.000</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-10 no-border-table">
									<div class="text-drop-card">V. 2018.04.14</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-10 no-border-table">
									<div class="text-drop-card">Closing Fee</div>
								</div>
								<div class="flex flex-direction-col flex-center-vertical flex-center-horizontal w-15">
									<div class="flex w-100 flex-center-vertical">
										<div class="flex flex-center-horizontal flex-center-vertical w-50">
											<div class="text-drop-card padding-spec-nup-1 ">Agensi</div>
										</div>
										<div class="flex flex-center-horizontal flex-center-vertical w-50">
											<div class="text-drop-card padding-spec-nup-1 ">Rp. 750.000</div>
										</div>
									</div>
								</div>
								<div class="flex flex-direction-col flex-center-vertical flex-center-horizontal w-15">
									<div class="flex w-100 flex-center-vertical">
										<div class="flex flex-center-horizontal flex-center-vertical w-50">
											<div class="text-drop-card padding-spec-nup-1 ">Head Marketing</div>
										</div>
										<div class="flex flex-center-horizontal flex-center-vertical w-50">
											<div class="text-drop-card padding-spec-nup-1 ">Rp. 750.000</div>
										</div>
									</div>
								</div>
								<div class="flex flex-direction-col flex-center-vertical flex-center-horizontal w-15">
									<div class="flex w-100 flex-center-vertical">
										<div class="flex flex-center-horizontal flex-center-vertical w-50">
											<div class="text-drop-card padding-spec-nup-1 ">Marketing</div>
										</div>
										<div class="flex flex-center-horizontal flex-center-vertical w-50">
											<div class="text-drop-card padding-spec-nup-1 ">Rp. 750.000</div>
										</div>
									</div>
								</div>
								<div class="flex flex-direction-col flex-center-vertical flex-center-horizontal w-15">
									<div class="flex w-100 flex-center-vertical">
										<div class="flex flex-center-horizontal flex-center-vertical w-50">
											<div class="text-drop-card padding-spec-nup-1 ">AMS</div>
										</div>
										<div class="flex flex-center-horizontal flex-center-vertical w-50">
											<div class="text-drop-card padding-spec-nup-1 ">Rp. 750.000</div>
										</div>
									</div>
								</div>
								<div class="flex flex-direction-row flex-gap-small flex-center-vertical flex-center-horizontal w-5 no-border-table">
									<div class="text-drop-card">01 Feb 2023</div>
								</div>
							</div>
						</div>
					</div>
					<div class="card w-100 height-fit">
						<div class="flex flex-between-horizontal">
							<div class="flex flex-gap-regular flex-center-vertical">
								<div class="text-display-sort">Menampilkan</div>
								<select class="select-sort">
									<option>10</option>
								</select>
								<div class="text-display-sort">dari <span class="bold-number">10</span> data Cicilan</div>
							</div>
							<div class="flex flex-gap-regular flex-center-vertical">
								<div class="flex flex-center-vertical flex-center-horizontal border-pagination"><img src="/images/icons/Arrow_Left.svg" alt=""></div>
								<div class="flex flex-center-vertical flex-center-horizontal border-pagination"><div class="text-display-sort bold-number" alt="">1</div></div>
								<div class="flex flex-center-vertical flex-center-horizontal border-pagination"><img src="/images/icons/Arrow_Right.svg" alt=""></div>
							</div>
						</div>
					</div>
				</div> -->
			</div>
		</div>
	</div>
</div>

<div id="pop-up" class="pop-up-background">
	<div class="pop-up-container" style="width: 300px;">
		{#if popUpSection == 'atur-success'}
		<div>
			<div class="pop-up-title">Berhasil di Atur!</div>
		</div>
		<div class="w-100" style="display: flex; flex-direction: column; gap: 8px;">
			<div class="pop-up-body-bold">Aturan Komisi berhasil disimpan dan telah berlaku!</div>
		</div>
		<div class="flex flex-gap-regular w-100">
			<button class="btn-fill flex flex-center-vertical flex-center-horizontal flex-gap-small" on:click={() => window.location.reload()} style="flex: 1;">
				<span>Tutup</span>
			</button> 
		</div>
		{:else if popUpSection == 'atur-fail'}
		<div>
			<div class="pop-up-title">Gagal di Atur!</div>
		</div>
		<div class="w-100" style="display: flex; flex-direction: column; gap: 8px;">
			<div class="pop-up-body-bold">Aturan Komisi gagal disimpan, silahkan coba lagi!</div>
		</div>
		<div class="flex flex-gap-regular w-100">
			<button class="btn-fill flex flex-center-vertical flex-center-horizontal flex-gap-small" on:click={() => window.location.reload()} style="flex: 1;">
				<span>Tutup</span>
			</button> 
		</div>
		{:else if popUpSection == 'hapus-promp'}
		<div>
			<div class="pop-up-title">Hapus Aturan?</div>
		</div>
		<div class="w-100" style="display: flex; flex-direction: column; gap: 8px;">
			<div class="pop-up-body-bold">Apakah anda yakin ingin menghapus aturan komisi ini?</div>
		</div>
		<div class="flex flex-gap-regular w-100">
			<button class="btn-outline flex flex-center-vertical flex-center-horizontal flex-gap-small" on:click={() => {
				popUpSection = ''
				document.getElementById('pop-up').style.display = 'none'
			}} style="flex: 1;">
				<span>Tutup</span>
			</button> 
			<button class="btn-fill-danger flex flex-center-vertical flex-center-horizontal flex-gap-small" on:click={() => {
				hapusAturan(activeData.id_regulasi_komisi)
			}} style="flex: 1;">
				<span>Hapus</span>
			</button> 
		</div>
		{:else if popUpSection == 'hapus-success'}
		<div>
			<div class="pop-up-title">Berhasil di Hapus!</div>
		</div>
		<div class="w-100" style="display: flex; flex-direction: column; gap: 8px;">
			<div class="pop-up-body-bold">Aturan Komisi berhasil dihapus!</div>
		</div>
		<div class="flex flex-gap-regular w-100">
			<button class="btn-fill flex flex-center-vertical flex-center-horizontal flex-gap-small" on:click={() => window.location.reload()} style="flex: 1;">
				<span>Tutup</span>
			</button> 
		</div>
		{:else if popUpSection == 'hapus-fail'}
		<div>
			<div class="pop-up-title">Gagal di Hapus!</div>
		</div>
		<div class="w-100" style="display: flex; flex-direction: column; gap: 8px;">
			<div class="pop-up-body-bold">Aturan Komisi gagal dihapus, silahkan coba lagi!</div>
		</div>
		<div class="flex flex-gap-regular w-100">
			<button class="btn-fill flex flex-center-vertical flex-center-horizontal flex-gap-small" on:click={() => window.location.reload()} style="flex: 1;">
				<span>Tutup</span>
			</button> 
		</div>
		{/if}
	</div>
</div>