<script type="text/javascript">
	import Sidebar from '../../../../../components/sidebar.svelte';
	import Navbar from '../../../../../components/navbar.svelte';
	import { onMount } from 'svelte';
	import {fly, scale} from 'svelte/transition'
	import ApiController from '../../../../../ApiController';
	import toDate from '../../../../../CustomTime';

	export let data

	let activeCicilan = null
	let popUpSection = ''
	let addState = false
	let editState = false

	let detailCicilan = null

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

	let getDetail = () => {
		activeCicilan = null
		ApiController({
			method:"GET",
			endpoint: `cicilan/${data.params.id_nup}`
		}).then(response => {
			detailCicilan = response.data.data
		})
	}

	let toIDR = value => {
		return new Intl.NumberFormat('id-ID', {style: 'currency', currency : "IDR"}).format(value).replace(/\,00$/, '')
	}

	let tambahCicilan = () => {
		let nominal = document.getElementById('nominal').value
		let tanggal_pembayaran = document.getElementById('tanggal').value

		if(nominal == ''){
			createAlert('nominal', 'Tidak boleh kosong!')
			return
		}

		if(tanggal_pembayaran == ''){
			createAlert('tanggal', 'Tidak boleh kosong!')
			return
		}

		ApiController({
			method:"POST",
			endpoint:`cicilan/${data.params.id_nup}/tambah-cicilan`,
			datas: {
				nominal, tanggal_pembayaran
			}
		}).then(response => {
			addState = false
			if(response.data.message == "Tambah Cicilan Success."){
				popUpSection = 'success'
				document.getElementById('pop-up').style.display = 'flex'
				getDetail()
			}else{
				popUpSection = 'fail'
				document.getElementById('pop-up').style.display = 'flex'
			}
		}).catch(err => {
			console.log(err)
			popUpSection = 'fail'
			document.getElementById('pop-up').style.display = 'flex'
		})
	}

	let hapusCicilan = () => {
		ApiController({
			method:"POST",
			endpoint:`cicilan/${activeCicilan}/hapus-cicilan`
		}).then(response => {
			if(response.data.message == "Hapus Cicilan Success."){
				popUpSection = 'hapus-success'
				getDetail()
			}else{
				popUpSection = 'hapus-fail'
			}
		}).catch(err => {
			console.log(err)
			popUpSection = 'hapus-fail'
		})
	}

	let editCicilan = () => {
		let nominal = document.getElementById('nominal').value
		let tanggal_pembayaran = document.getElementById('tanggal').value

		if(nominal == ''){
			createAlert('nominal', 'Tidak boleh kosong!')
			return
		}

		if(tanggal_pembayaran == ''){
			createAlert('tanggal', 'Tidak boleh kosong!')
			return
		}

		ApiController({
			method:"POST",
			endpoint:`cicilan/${activeCicilan}/atur-cicilan`,
			datas: {
				nominal, tanggal_pembayaran
			}
		}).then(response => {
			if(response.data.message == "Atur Cicilan Success."){
				popUpSection = 'success'
				document.getElementById('pop-up').style.display = 'flex'
				getDetail()
			}else{
				popUpSection = 'fail'
				document.getElementById('pop-up').style.display = 'flex'
			}
			editState = false
		}).catch(err => {
			console.log(err)
			popUpSection = 'fail'
			document.getElementById('pop-up').style.display = 'flex'
		})
	}

	onMount(async () => {
		getDetail()
	})
</script>

<div id="after-login-layout">
	<Navbar/>
	<div class="flex">
		<Sidebar statusPointer="Cicilan" pagePointer="admin"/>
		<div class="w-80 content">
			<div class="flex flex-direction-col flex-gap-semi-large" in:fly={{ y: -20, duration: 600 }}>
				<div class="flex flex-between-horizontal flex-center-vertical w-100">
					<div class="flex  flex-direction-col flex-between-horizontal flex-gap-semi-small w-100">
						<div class="title-content">Detail Cicilan</div>
						<div class="flex flex-gap-regular flex-center-vertical">
							<div class="text-breadcrumb">Cicilan</div>
							<img src="/images/icons/Arrow_Right.svg" alt="">
							<div class="text-breadcrumb-active">Detail</div>
						</div>
					</div>
					<div class="flex flex-gap-regular">
						<a href="/super-admin/cicilan/atur-cicilan/{data.params.id_nup}" class="no-decor"><button class="btn-fill flex flex-center-vertical flex-gap-small" style="white-space: nowrap;">Atur Cicilan</button></a>
					</div>
				</div>
				<div class="flex flex-gap-semi-large">
					<div class="card flex flex-gap-semi-small custom-border">
						<div class="flex flex-direction-col">
							<div class="title-small-card-dashboard">Total Yang Harus Dibayar</div> 
							<div class="flex flex-center-vertical flex-gap-small">
								<div class="value-small-card-dashboard">{detailCicilan == null ? '' : toIDR(detailCicilan.total_harga)}</div>
							</div>
						</div>
					</div>
					<div class="card flex flex-gap-semi-small custom-border">
						<div class="flex flex-direction-col">
							<div class="title-small-card-dashboard">Jumlah Terbayarkan (inc. DP)</div> 
							<div class="flex flex-center-vertical flex-gap-small">
								<div class="value-small-card-dashboard">{detailCicilan == null ? '' : toIDR(detailCicilan.total_terbayar)}</div>
							</div>
						</div>
					</div>
					<div class="card flex flex-gap-semi-small custom-border">
						<div class="flex flex-direction-col">
							<div class="title-small-card-dashboard">Sisa Nominal Yang Harus Dibayar</div> 
							<div class="flex flex-center-vertical flex-gap-small">
								<div class="value-small-card-dashboard">{detailCicilan == null ? '' : toIDR(detailCicilan.sisa_nominal_yang_dibayar)}</div>
							</div>
						</div>
					</div>
					<div class="card flex flex-gap-semi-small custom-border">
						<div class="flex flex-direction-col">
							<div class="title-small-card-dashboard">Status Cicilan</div> 
							<div class="flex flex-center-vertical flex-gap-small">
								{#if detailCicilan != null}
								{#if detailCicilan.status_cicilan == 'lunas'}
								<div class="value-small-card-dashboard" style="color: #02C58F;">Lunas</div>
								{:else}
								<div class="value-small-card-dashboard text-danger">Belum Lunas</div>
								{/if}
								{/if}
							</div>
						</div>
					</div> 
				</div>
				<div class="flex w-100 flex-gap-semi-large">
					{#if detailCicilan != null}
					{#if detailCicilan.cara_bayar != 'Cash Bertahap'}
					<div class="w-25">
						<div class="card flex flex-gap-semi-large flex-direction-col custom-border">
							<div class="w-100 flex flex-direction-col flex-gap-large">
								<div class="flex flex-gap-regular">
									<div class="w-100 flex flex-direction-col flex-gap-regular">
										<div class="flex flex-center-vertical flex-between-horizontal">
											<div class="secondary-title-card-detail">Selisih Plafond KPR</div>
											<a href="/super-admin/cicilan/selisih-plafond/{data.params.id_nup}" class="no-decor">
												<button class="btn-outline flex flex-center-vertical flex-gap-small">
													<span>Atur</span>
												</button>
											</a>
										</div>
										<div class="flex w-100">
											<div class="flex flex-direction-col w-50">
												<div class="caption-card-detail">Nominal Dibayarkan</div> 
												<div class="content-card-detail">{toIDR(detailCicilan.kpr.nominal)}</div>
											</div> 
											<div class="flex flex-direction-col w-50">
												<div class="caption-card-detail">Tanggal Pembayaran</div> 
												<div class="content-card-detail">{toDate(detailCicilan.kpr.tanggal_pembayaran)}</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/if}
					<div class="w-25">
						<div class="card flex flex-gap-semi-large flex-direction-col custom-border">
							<div class="w-100 flex flex-direction-col flex-gap-large">
								<div class="flex flex-gap-regular">
									<div class="w-100 flex flex-direction-col flex-gap-regular">
										<div class="flex flex-center-vertical flex-between-horizontal">
											<div class="secondary-title-card-detail">Biaya Proses</div> 
											<a href="/super-admin/cicilan/biaya-proses/{data.params.id_nup}" class="no-decor">
												<button class="btn-outline flex flex-center-vertical flex-gap-small">
													<span>Atur</span>
												</button>
											</a>
										</div> 
										<div class="flex w-100">
											<div class="flex flex-direction-col w-50">
												<div class="caption-card-detail">Nominal Dibayarkan</div> 
												<div class="content-card-detail">{toIDR(detailCicilan.proses.nominal)}</div>
											</div> 
											<div class="flex flex-direction-col w-50">
												<div class="caption-card-detail">Tanggal Pembayaran</div> 
												<div class="content-card-detail">{toDate(detailCicilan.proses.tanggal_pembayaran)}</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="w-25">
						<div class="card flex flex-gap-semi-large flex-direction-col custom-border">
							<div class="w-100 flex flex-direction-col flex-gap-large">
								<div class="flex flex-gap-regular">
									<div class="w-100 flex flex-direction-col flex-gap-regular">
										<div class="flex flex-center-vertical flex-between-horizontal">
											<div class="secondary-title-card-detail">SBUM</div>
											<a href="/super-admin/cicilan/sbum/{data.params.id_nup}" class="no-decor">
												<button class="btn-outline flex flex-center-vertical flex-gap-small">
													<span>Atur</span>
												</button>
											</a>
										</div> 
										<div class="flex w-100">
											<div class="flex flex-direction-col w-50">
												<div class="caption-card-detail">Nominal Dibayarkan</div> 
												<div class="content-card-detail">{toIDR(detailCicilan.sbum.nominal)}</div>
											</div> 
											<div class="flex flex-direction-col w-50">
												<div class="caption-card-detail">Tanggal Pembayaran</div> 
												<div class="content-card-detail">{toDate(detailCicilan.sbum.tanggal_pembayaran)}</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div> 
					{/if}
				</div>
				<div class="flex w-100" style="overflow-x: auto; white-space: nowrap;">
					<div class="flex flex-direction-col flex-gap-small">
						<div class="flex flex-gap-small flex-center-vertical border-separate bg-white custom-left-side-radius">
							<div class="text-drop-card">Tabel</div>
						</div>
						<div class="flex flex-gap-small flex-center-vertical border-separate bg-white custom-left-side-radius">
							<div class="text-drop-card">Nominal</div>
						</div>
						<div class="flex flex-gap-small flex-center-vertical border-separate bg-white custom-left-side-radius">
							<div class="text-drop-card">Tanggal</div>
						</div>
					</div>
					{#if detailCicilan != null}
					{#each detailCicilan.cicilan as cicilan, index}
					<div class="flex flex-direction-col flex-gap-small">
						<div class="flex flex-gap-small flex-between-horizontal flex-center-vertical border-separate bg-white {(index == detailCicilan.cicilan.length - 1) && (addState == false) ? 'custom-right-side-radius' : 'custom-top-bottom-border'}">
							<div class="text-drop-card">Cicilan {index+1}</div>
							{#if !editState}
							<div style="display: flex; gap: 4px;">
								<!-- svelte-ignore a11y-click-events-have-key-events -->
								<img src="/images/icons/Edit.svg" alt="" width="16" style="cursor: pointer;" on:click={() => {
									activeCicilan = cicilan.id_cicilan
									editState = true
								}}> 
								<!-- svelte-ignore a11y-click-events-have-key-events -->
								<img src="/images/icons/Delete.svg" alt="" width="16" style="cursor: pointer;" on:click={() => {
									activeCicilan = cicilan.id_cicilan
									popUpSection = 'hapus-promp'
									document.getElementById('pop-up').style.display = 'flex'
								}}>
							</div>
							{/if}
						</div>
						{#if editState && cicilan.id_cicilan == activeCicilan}
						<div class="bg-white {(detailCicilan.cicilan.length - 1 - index == 0 ? 'custom-right-side-radius' : 'custom-top-bottom-border custom-right-border')}">
							<input type="text" id="nominal" class="input-cicilan" value="{cicilan.nominal}">
						</div>
						<div class="bg-white {(detailCicilan.cicilan.length - 1 - index == 0 ? 'custom-right-side-radius' : 'custom-top-bottom-border custom-right-border')}">
							<input type="date" id="tanggal" class="input-cicilan" value="{cicilan.tanggal.split(" ")[0]}">
						</div>
						{:else}
						<div class="flex flex-gap-small flex-center-vertical flex-center-horizontal border-separate bg-white {(index == detailCicilan.cicilan.length - 1) && (addState == false) ? 'custom-right-side-radius' : 'custom-top-bottom-border'}">
							<div class="text-drop-card">{toIDR(cicilan.nominal)}</div>
						</div>
						<div class="flex flex-gap-small flex-center-vertical flex-center-horizontal border-separate bg-white {(index == detailCicilan.cicilan.length - 1) && (addState == false) ? 'custom-right-side-radius' : 'custom-top-bottom-border'}">
							<div class="text-drop-card">{toDate(cicilan.tanggal)}</div>
						</div>
						{/if}
					</div>
					{/each}
					{/if}
					{#if addState}
					<div class="flex flex-direction-col flex-gap-small">
						<div class="flex flex-gap-small flex-center-vertical border-separate bg-white custom-right-side-radius">
							<div class="text-drop-card">Cicilan {detailCicilan.cicilan.length + 1}</div>
						</div>
						<div class="bg-white custom-right-side-radius">
							<input type="text" id="nominal" class="input-cicilan">
						</div>
						<div class="bg-white custom-right-side-radius">
							<input type="date" id="tanggal" class="input-cicilan">
						</div>
					</div>
					<button class="btn-fill flex flex-center-vertical" style="margin-left: 7.5px; height: fit-content; margin-top: 6px;"
					on:click={tambahCicilan}>
						Simpan
					</button>
					<button class="btn-outline flex flex-center-vertical" style="margin-left: 7.5px; height: fit-content; margin-top: 6px;"
					on:click={() => {addState = !addState}}>
						Batal
					</button>
					{:else if editState}
					<button class="btn-fill flex flex-center-vertical" style="margin-left: 7.5px; height: fit-content; margin-top: 6px;"
					on:click={editCicilan}>
						Simpan Perubahan
					</button>
					<button class="btn-outline flex flex-center-vertical" style="margin-left: 7.5px; height: fit-content; margin-top: 6px;"
					on:click={() => {editState = !editState}}>
						Batal
					</button>
					{:else}
					<button class="btn-fill flex flex-center-vertical" style="margin-left: 7.5px; height: fit-content; margin-top: 6px;"
					on:click={() => {addState = !addState}}>
						<img src="/images/icons/Add_Plus.svg" alt="">
					</button>
					{/if}
				</div>
			</div>
		</div>
	</div>
</div>

<div id="pop-up" class="pop-up-background">
	<div class="pop-up-container" style="width: 300px">
		{#if popUpSection != 'hapus-promp'}
		<div>
			{#if popUpSection == 'success' || popUpSection == 'hapus-success'}
			<div class="pop-up-title">Berhasil!</div>
			{:else}
			<div class="pop-up-title">Gagal!</div>
			{/if}
		</div>
		<div class="w-100" style="display: flex; flex-direction: column; gap: 8px;">
			{#if popUpSection == 'success'}
			<div class="pop-up-body-bold">Data telah berhasil disimpan!</div>
			{:else if popUpSection == 'hapus-success'}
			<div class="pop-up-body-bold">Data telah berhasil dihapus!</div>
			{:else if popUpSection == 'hapus-fail'}
			<div class="pop-up-body-bold">Data telah gagal dihapus. Silahkan coba lagi!</div>
			{:else}
			<div class="pop-up-body-bold">Data gagal disimpan. Pastikan data yang diinputkan benar. Silahkan coba lagi!</div>
			{/if}
		</div>
		<div class="flex flex-gap-regular w-100">
			<button class="btn-fill flex flex-center-vertical flex-center-horizontal flex-gap-small" on:click={() => {
				document.getElementById('pop-up').style.display = 'none'
			}} style="flex: 1;">
				<span>Tutup</span>
			</button> 
		</div>
		{:else}
		<div>
			<div class="pop-up-title">Hapus Cicilan</div>
		</div>
		<div class="w-100" style="display: flex; flex-direction: column; gap: 8px;">
			<div class="pop-up-body">Yakin ingin menghapus cicilan?</div>
		</div>
		<div class="flex flex-gap-regular w-100">
			<button class="btn-outline flex flex-center-vertical flex-center-horizontal flex-gap-small" on:click={() => {
				document.getElementById('pop-up').style.display = 'none'
			}} style="flex: 1;">
				<span>Batal</span>
			</button>
			<button class="btn-fill-danger flex flex-center-vertical flex-center-horizontal flex-gap-small" on:click={hapusCicilan} style="flex: 1;">
				<span>Hapus</span>
			</button> 
		</div>
		{/if}
	</div>
</div>