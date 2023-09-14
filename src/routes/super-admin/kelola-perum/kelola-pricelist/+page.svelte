<script type="text/javascript">
	import Sidebar from '../../../../components/sidebar.svelte';
	import Navbar from '../../../../components/navbar.svelte';
	import { onMount } from 'svelte';
	import { fly, scale } from 'svelte/transition';
	import ApiController from '../../../../ApiController';
	import toDate from '../../../../CustomTime'

	let state = 'add'
	let realPricelistData = null
	let pricelistData = null

	let popUpStatus = ''
	let selectedId = null

	let showPopUp = (status) => {
		popUpStatus = status
		document.getElementById('pop-up').style.display = 'flex'
	}

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

	let clearForm = () => {
		state = 'add'
		document.getElementById('id-pricelist').value = ""
		document.getElementById('kode-pricelist').value = ""
		document.getElementById('berkas-pricelist').value = ""

		if(document.getElementById(`alert-kode-pricelist`) != null){
			document.getElementById(`alert-kode-pricelist`).remove()
		}

		if(document.getElementById(`alert-berkas-pricelist`) != null){
			document.getElementById(`alert-berkas-pricelist`).remove()
		}
		
	}

	let savePricelist = () => {
		let formData = new FormData()
		let versi = document.getElementById('kode-pricelist').value
		let berkas = document.getElementById('berkas-pricelist').files

		if(versi == ''){
			createAlert('kode-pricelist', 'Mohon isi Versi Pricelist!')
			return
		}

		if(berkas.length == 0){
			createAlert('berkas-pricelist', 'Mohon sertakan berkas Pricelist (PDF)')
			return
		}

		formData.append('versi_pricelist', versi)
		formData.append('berkas_pricelist', berkas[0])

		ApiController({
			method:"POST",
			endpoint: 'pricelist/add',
			datas: formData,
			sendForm:true
		}).then(response => {
			showPopUp('add-success')
			getPricelist()
			clearForm()
		}).catch(err => {
			console.log(err)
			showPopUp('add-fail')
		})
	}

	let editPricelist = () => {
		let formData = new FormData()
		let id = document.getElementById('id-pricelist').value
		let versi = document.getElementById('kode-pricelist').value
		let berkas = document.getElementById('berkas-pricelist').files

		if(versi == ''){
			createAlert('kode-pricelist', 'Mohon isi Versi Pricelist!')
			return
		}

		formData.append('versi_pricelist', versi)
		if(berkas.length > 0){
			formData.append("berkas_pricelist", berkas[0])
		}
		
		ApiController({
			method:"POST",
			endpoint:`pricelist/${id}/edit`,
			datas: formData,
			sendForm: true
		}).then(response => {
			showPopUp('update-success')
			getPricelist()
			clearForm()
		}).catch(err => {
			console.log(err)
			showPopUp('update-fail')
		})
	}

	let deletePricelist = () => {
		ApiController({
			method:"POST",
			endpoint:`pricelist/${selectedId}/delete`
		}).then(response => {
			showPopUp('delete-success');
			getPricelist()
		}).catch(err => {
			console.log(err)
			showPopUp('delete-fail')
		})
	}
	
	let setForm = (data) => {
		state = 'edit'
		document.getElementById('kode-pricelist').value = data.versi_pricelist
		document.getElementById('id-pricelist').value = data.id_pricelist
	}

	let getPricelist = () => {
		ApiController({
			method:"GET",
			endpoint: 'pricelist'
		}).then(response => {
			realPricelistData = response.data.sort((a, b) => b.id_pricelist - a.id_pricelist)
			pricelistData = realPricelistData
		})
	}

	let filterData = () => {
		pricelistData = realPricelistData
		let kode = document.getElementById('filter-kode').value.toLowerCase()

		pricelistData = pricelistData.filter(elm => elm.versi_pricelist.toLowerCase().includes(kode))
	}
	
	onMount(async () => {
		getPricelist()
	})

</script>

<div id="after-login-layout">
	<Navbar />
	<div class="flex">
		<Sidebar statusPointer="KelolaPerum" pagePointer="admin" />
		<div class="w-80 content">
			<div class="flex flex-direction-col flex-gap-large">
				<div class="flex flex-direction-col flex-gap-semi-large w-100">
					<div class="flex flex-direction-col flex-gap-semi-small w-100">
						<div class="title-content">Kelola Pricelist</div>
						<div class="flex flex-gap-regular flex-center-vertical">
							<div class="text-breadcrumb">Kelola Perum</div>
							<img src="/images/icons/Arrow_Right.svg" alt="" />
							<div class="text-breadcrumb-active">Kelola Pricelist</div>
						</div>
					</div>
					<div class="card w-40">
						<div class="flex flex-direction-col flex-gap-semi-large">
							<div class="flex flex-center-vertical">
								<div class="title-card-tambah-nup">
									{state == 'add' ? 'Pricelist Baru' : 'Edit Pricelist'}
								</div>
							</div>
							<input type="hidden" id="id-pricelist"/>
							<div class="flex flex-gap-regular">
								<div class="flex flex-direction-col flex-gap-small w-50">
									<div class="title-input-nup">Kode Pricelist</div>
									<input type="text" id="kode-pricelist" class="input-nup" />
								</div>
							</div>
							<div class="flex flex-gap-regular">
								<div class="flex flex-direction-col flex-gap-small w-100">
									<div class="title-input-nup">Berkas Pricelist</div>
									<input type="file" class="file-nup" id="berkas-pricelist">
								</div>
							</div>
						</div>
					</div>
					<div class="w-40 flex flex-gap-regular flex-end-horizontal">
						<button class="btn-outline flex flex-center-vertical flex-gap-small" on:click={clearForm}>
							<span>Batal</span>
						</button>
						{#if state == 'add'}
						<button class="btn-fill flex flex-center-vertical flex-gap-small" on:click={savePricelist}>
							<span>Simpan Pricelist</span>
						</button>
						{:else if state == 'edit'}
						<button class="btn-fill flex flex-center-vertical flex-gap-small" on:click={editPricelist}>
							<span>Simpan Perubahan</span>
						</button>
						{/if}
					</div>
					<input type="text" placeholder="Kode Pricelist" class="input-col-2 w-15" id="filter-kode" on:input={filterData}>
					<div class="flex flex-direction-col flex-gap-regular w-50">
						<div class="card-head height-fit">
							<div class="flex">
								<div class="flex flex-gap-small flex-center-vertical flex-center-horizontal w-10 border-separate">
									<div class="text-drop-card">No</div>
									<img src="/images/icons/Arrow.svg" alt="">
								</div>
								<div class="flex flex-gap-small flex-center-vertical border-separate" style="width: 35%;">
									<div class="text-drop-card">Kode Pricelist</div>
									<img src="/images/icons/Arrow.svg" alt="">
								</div>
								<div class="flex flex-gap-small flex-center-vertical flex-center-horizontal w-20 border-separate">
									<div class="text-drop-card">Tanggal</div>
									<img src="/images/icons/Arrow.svg" alt="">
								</div>
								<div class="flex flex-gap-small flex-center-vertical flex-center-horizontal w-20 border-separate">
									<div class="text-drop-card">Berkas</div>
									<img src="/images/icons/Arrow.svg" alt="">
								</div>
								<div class="flex flex-gap-small flex-center-vertical flex-center-horizontal w-15">
									<div class="text-drop-card">Aksi</div>
									<img src="/images/icons/Arrow.svg" alt="">
								</div>
							</div>
						</div>
						{#if pricelistData != null}
						{#if pricelistData.length > 0}
						{#each pricelistData as d, i}
						<div class="card-head height-fit">
							<div class="flex">
								<div class="flex flex-gap-small flex-center-vertical flex-center-horizontal w-10 no-border-table">
									<div class="text-drop-card">{i+1}</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical no-border-table" style="width: 35%;">
									<div class="text-drop-card">{d.versi_pricelist}</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical flex-center-horizontal w-20 no-border-table">
									<div class="text-drop-card">{toDate(d.created_at.split("T")[0])}</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical flex-center-horizontal w-20 no-border-table">
									{#if d.berkas_pricelist == null}
									<div class="text-drop-card">-Tidak Ada-</div>
									{:else}
									<a href="{d.berkas_pricelist}" class="no-decor link-detail">lihat</a>
									{/if}
								</div>
								<!-- svelte-ignore a11y-click-events-have-key-events -->
								<div class="flex flex-gap-small flex-center-vertical flex-center-horizontal w-15">
									<!-- svelte-ignore a11y-click-events-have-key-events -->
									<img src="/images/icons/Edit.svg" alt="" on:click={() => setForm(d)} style='cursor: pointer;'/>
									<img src="/images/icons/Delete.svg" alt="" on:click={() => {
										selectedId = d.id_pricelist
										showPopUp('delete-promp')
									}} style='cursor: pointer;'/>
								</div>
							</div>
						</div>
						{/each}
						{:else}
						<div class="card-head height-fit">
							<div class="flex">
								<div class="flex flex-gap-small flex-center-vertical flex-center-horizontal w-100 no-border-table">
									<div class="text-drop-card">Data tidak ada</div>
								</div>
							</div>
						</div>
						{/if}
						{/if}
					</div>
					<div class="card w-50 height-fit">
						<div class="flex flex-between-horizontal">
							<div class="flex flex-gap-regular flex-center-vertical">
								<div class="text-display-sort">Menampilkan</div>
								<select class="select-sort">
									<option>10</option>
								</select>
								<div class="text-display-sort">dari <span class="bold-number">{pricelistData != null ? pricelistData.length : ''}</span> data Pricelist</div>
							</div>
							<div class="flex flex-gap-regular flex-center-vertical">
								<div class="flex flex-center-vertical flex-center-horizontal border-pagination"><img src="/images/icons/Arrow_Left.svg" alt=""></div>
								<div class="flex flex-center-vertical flex-center-horizontal border-pagination"><div class="text-display-sort bold-number" alt="">1</div></div>
								<div class="flex flex-center-vertical flex-center-horizontal border-pagination"><img src="/images/icons/Arrow_Right.svg" alt=""></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<div id="pop-up" class="pop-up-background">
	<div class="pop-up-container" style="width: 350px;">
		<div class="w-100" style="display: flex; flex-direction: column; gap: 8px;">
			{#if popUpStatus == 'update-success'}
			<div class="pop-up-title">Update Pricelist Berhasil!</div>
			<div class="pop-up-body">Data Pricelist berhasil diperbaharui.</div>
			{:else if popUpStatus == 'add-success'}
			<div class="pop-up-title">Berhasil!</div>
			<div class="pop-up-body">Data Pricelist berhasil ditambahkan.</div>
			{:else if popUpStatus == 'update-fail'}
			<div class="pop-up-title">Update Pricelist Gagal!</div>
			<div class="pop-up-body">Data Pricelist gagal diperbaharui.</div>
			{:else if popUpStatus == 'add-fail'}
			<div class="pop-up-title">Gagal!</div>
			<div class="pop-up-body">Data Pricelist gagal ditambahkan.</div>
			{:else if popUpStatus == 'delete-promp'}
			<div class="pop-up-title">Hapus Pricelist?</div>
			<div class="pop-up-body">Apakah anda yakin ingin menghapus data Pricelist?.</div>
			{:else if popUpStatus == 'delete-success'}
			<div class="pop-up-title">Berhasil!</div>
			<div class="pop-up-body">Data Pricelist berhasil dihapus.</div>
			{:else if popUpStatus == 'delete-fail'}
			<div class="pop-up-title">Gagal!</div>
			<div class="pop-up-body">Data Pricelist gagal dihapus.</div>
			{/if}
		</div>
		<div class="flex w-100 flex-gap-regular">
			{#if popUpStatus == 'delete-promp'}
			<button class="btn-outline flex flex-center-vertical flex-center-horizontal flex-gap-small" on:click={() => {
				selectedId = null
				document.getElementById('pop-up').style.display = 'none'
			}} style="flex: 1;">
				<span>Batal</span>
			</button>
			<button class="btn-fill-danger flex flex-center-vertical flex-center-horizontal flex-gap-small" on:click={() => {
				deletePricelist()
			}} style="flex: 1;">
				<span>Hapus</span>
			</button>
			{:else}
			<button class="btn-fill flex flex-center-vertical flex-center-horizontal flex-gap-small" on:click={() => {
				document.getElementById('pop-up').style.display = 'none'
			}} style="flex: 1;">
				<span>Tutup</span>
			</button>
			{/if}
		</div>
	</div>
</div>