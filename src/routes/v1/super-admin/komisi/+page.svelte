<script type="text/javascript">
	import Sidebar from '../../../../components/sidebar.svelte';
	import Navbar from '../../../../components/navbar.svelte';
	import { onMount } from 'svelte';
	import {fly, scale} from 'svelte/transition'
	import ApiController from '../../../../ApiController';
	import toDate from '../../../../CustomTime';

	let data = null
	let status = false
	let activeNupId = null
	let activeData = null
	let activeTipe = ''

	let popUpSection = ''

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

	let toIDR = value => {
		return new Intl.NumberFormat('id-ID', {style: 'currency', currency : "IDR"}).format(value).replace(/\,00$/, '')
	}

	let getKomisi = () => {
		ApiController({
			endpoint : 'komisi',
			method : "GET"
		}).then(response => {
			data = response.data.data
			status = true
		})
	}

	let showPopup = (data, tipe) => {
		activeTipe = tipe
		activeData = data
		activeNupId = data.id_nup
		document.getElementById('pop-up').style.display = 'flex'
	}

	let closePopup = () => {
		document.getElementById('pop-up').style.display = 'none'
	}

	let bayarKomisi = () => {
		let dokumen = document.getElementById('dokumen').files[0]
		let targetLabel = document.getElementById('target-label')

		if(dokumen == undefined){
			createAlert('dokumen', 'Mohon sertakan bukti transfer!')
		}else{
			let endpoint = ''
			let formdata = new FormData()
			formdata.append('dokumen', dokumen)

			if(targetLabel.textContent.includes('CF')){
				endpoint = `komisi/${activeNupId}/bayar/closingfee`
			}else if(targetLabel.textContent.includes('DP')){
				endpoint = `komisi/${activeNupId}/bayar/downpayment`
			}else if(targetLabel.textContent.includes('Akad')){
				endpoint = `komisi/${activeNupId}/bayar/akad`
			}
			
			ApiController({
				method: "POST",
				endpoint: endpoint,
				datas: formdata,
				sendForm: true
			}).then(response => {
				popUpSection = 'bayar-success'
			})
		}
	}

	let aturKomisi = () => {
		let tanggal_berlaku = document.getElementById('tanggal-berlaku').value
		let agensi = document.getElementById('agensi').value
		let nominal_agensi = document.getElementById('nominal-agensi').value
		let nominal_head_marketing = document.getElementById('nominal-head-marketing').value
		let nominal_marketing = document.getElementById('nominal-marketing').value
		let nominal_ams = ''
		let jenis_komisi = ''

		if(activeTipe == 'CF'){
			jenis_komisi = 'Closing Fee'
		}else if(activeTipe == 'DP'){
			jenis_komisi = 'Down Payment'
		}else if(activeTipe == 'Akad'){
			jenis_komisi = 'Akad'
			nominal_ams = document.getElementById('nominal-ams').value
		}

		if(tanggal_berlaku == ''){
			createAlert('tanggal-berlaku', 'Mohon tentukan tanggal berlaku Komisi!')
			return
		}

		if(agensi == ''){
			createAlert('agensi', 'Mohon masukkan nama Agensi!')
			return
		}

		if(nominal_agensi == ''){
			createAlert('nominal-agensi', 'Mohon tentukan nominal Agensi!')
			return
		}

		if(nominal_head_marketing == ''){
			createAlert('nominal-head-marketing', 'Mohon tentukan nominal Head Marketing!')
			return
		}

		if(nominal_marketing == ''){
			createAlert('nominal-marketing', 'Mohon tentukan nominal Marketing!')
			return
		}

		if(nominal_ams == '' && activeTipe == 'Akad'){
			createAlert('nominal-ams', 'Mohon tentukan nominal AMS!')
			return
		}

		let data = {
			komisi_1_tanggal_berlaku: tanggal_berlaku,
			komisi_1_jenis_komisi: jenis_komisi,
			komisi_1_agensi: agensi,
			komisi_1_nominal_agensi: nominal_agensi,
			komisi_1_nominal_penerima_1: nominal_head_marketing,
			komisi_1_nominal_penerima_2: nominal_marketing,
		}

		if(activeTipe == 'Akad'){
			data['komisi_1_nominal_penerima_3'] = nominal_ams
		}

		ApiController({
			method:"POST",
			endpoint: `komisi/${activeData.id_nup}/atur`,
			datas: data
		}).then(response => {
			console.log(response)
			if(response.data.message == "Komisi Updated."){
				popUpSection = 'atur-success'
			}
		})
	}

	onMount(async () => {
		getKomisi()
	})

</script>

<div id="after-login-layout">
	<Navbar/>
	<div class="flex">
		<Sidebar statusPointer="Komisi" pagePointer="admin"/>
		<div class="w-80 content">
			<div class="flex flex-direction-col flex-gap-large" in:fly={{ y: -20, duration: 600 }}>
				<div class="flex flex-between-horizontal flex-center-vertical w-100">
					<div class="title-content">Daftar Komisi</div>
					<div class="flex flex-gap-regular">
						<button class="btn-fill flex flex-center-vertical flex-gap-small" on:click={() => window.location.href = '/v1/super-admin/komisi/atur'}>
							<span>Kelola Aturan Komisi</span>
						</button>
					</div>
				</div>
				{#if status}
				<div class="flex flex-direction-col flex-gap-regular">
					<div class="flex">
						<select id="select-perum" class="select-col-2 w-25">
							<option selected value="">Semua Perum</option>
						</select>
					</div>
					<div class="flex flex-gap-semi-large w-100">
						<input type="text" placeholder="Cari NUP" class="input-col-2 w-15" id="filter-nup">
						<input type="text" placeholder="Cari Head Marketing" class="input-col-2 w-15" id="filter-head-marketing">
						<input type="text" placeholder="Cari Marketing" class="input-col-2 w-15" id="filter-marketing">
					</div>
					<div class="scroll-x flex flex-direction-col flex-gap-regular">
						<div class="card-head w-content-2 height-fit">
							<div class="flex">
								<div class="flex flex-gap-small flex-center-vertical flex-center-horizontal w-5 border-separate">
									<div class="text-drop-card">NUP</div>
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
									<div class="text-drop-card">No</div>
									<img src="/images/icons/Arrow.svg" alt="">
								</div>
								<div class="flex flex-gap-small flex-center-vertical flex-center-horizontal w-5 border-separate">
									<div class="text-drop-card">Tipe</div>
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
									<div class="text-drop-card">Pemesan</div>
									<img src="/images/icons/Arrow.svg" alt="">
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-10 border-separate">
									<div class="text-drop-card">Head Marketing</div>
									<img src="/images/icons/Arrow.svg" alt="">
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-10 border-separate">
									<div class="text-drop-card">Marketing</div>
									<img src="/images/icons/Arrow.svg" alt="">
								</div>
								<div class="flex flex-direction-col flex-center-vertical w-40 border-separate-2">
									<div class="flex w-100 flex-center-horizontal border-bottom-seperate">
										<div class="text-drop-card padding-spec-nup-1">Closing Fee</div>
									</div>
									<div class="flex w-100">
										<div class="flex flex-center-horizontal w-50 border-separate-2">
											<div class="text-drop-card padding-spec-nup-1">Aturan Komisi</div>
										</div>
										<div class="flex flex-center-horizontal w-50 border-separate-2">
											<div class="text-drop-card padding-spec-nup-1">Finance</div>
										</div>
										<div class="flex flex-center-horizontal w-50 border-separate-2">
											<div class="text-drop-card padding-spec-nup-1">SuperAdmin</div>
										</div>
										<div class="flex flex-center-horizontal w-50">
											<div class="text-drop-card padding-spec-nup-1 ">Bukti Berkas</div>
										</div>
									</div>
								</div>
								<div class="flex flex-direction-col flex-center-vertical w-40 border-separate-2">
									<div class="flex w-100 flex-center-horizontal border-bottom-seperate">
										<div class="text-drop-card padding-spec-nup-1">Down Payment</div>
									</div>
									<div class="flex w-100">
										<div class="flex flex-center-horizontal w-50 border-separate-2">
											<div class="text-drop-card padding-spec-nup-1">Aturan Komisi</div>
										</div>
										<div class="flex flex-center-horizontal w-50 border-separate-2">
											<div class="text-drop-card padding-spec-nup-1">Finance</div>
										</div>
										<div class="flex flex-center-horizontal w-50 border-separate-2">
											<div class="text-drop-card padding-spec-nup-1">SuperAdmin</div>
										</div>
										<div class="flex flex-center-horizontal w-50">
											<div class="text-drop-card padding-spec-nup-1 ">Bukti Berkas</div>
										</div>
									</div>
								</div>
								<div class="flex flex-direction-col flex-center-vertical w-40 border-separate-2">
									<div class="flex w-100 flex-center-horizontal border-bottom-seperate">
										<div class="text-drop-card padding-spec-nup-1">Akad</div>
									</div>
									<div class="flex w-100">
										<div class="flex flex-center-horizontal w-50 border-separate-2">
											<div class="text-drop-card padding-spec-nup-1">Aturan Komisi</div>
										</div>
										<div class="flex flex-center-horizontal w-50 border-separate-2">
											<div class="text-drop-card padding-spec-nup-1">Finance</div>
										</div>
										<div class="flex flex-center-horizontal w-50 border-separate-2">
											<div class="text-drop-card padding-spec-nup-1">SuperAdmin</div>
										</div>
										<div class="flex flex-center-horizontal w-50">
											<div class="text-drop-card padding-spec-nup-1 ">Bukti Berkas</div>
										</div>
									</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical flex-center-horizontal w-10 border-separate">
									<div class="text-drop-card">Status</div>
									<img src="/images/icons/Arrow.svg" alt="">
								</div>
								<div class="flex flex-gap-small flex-center-vertical flex-center-horizontal w-10 border-separate">
									<div class="text-drop-card">Bayar</div>
									<img src="/images/icons/Arrow.svg" alt="">
								</div>
								<div class="flex flex-gap-small flex-center-vertical flex-center-horizontal w-5 border-non-separate">
									<div class="text-drop-card">Aksi</div>
									<img src="/images/icons/Arrow.svg" alt="">
								</div>
							</div>
						</div>
						{#each data as d}
						<div class="card-head w-content-2 height-fit">
							<div class="flex">
								<div class="flex flex-gap-small flex-center-vertical flex-center-horizontal w-5 no-border-table">
									<div class="text-drop-card">{d.id_nup}</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical flex-center-horizontal w-5 no-border-table">
									<div class="text-drop-card">{d.perumahan}</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical flex-center-horizontal w-5 no-border-table">
									<div class="text-drop-card">{d.blok}</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical flex-center-horizontal w-5 no-border-table">
									<div class="text-drop-card">{d.nomor}</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical flex-center-horizontal w-5 no-border-table">
									<div class="text-drop-card">{d.tipe}</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-10 no-border-table">
									<div class="text-drop-card">{toIDR(d.harga_unit)}</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-10 no-border-table">
									<div class="text-drop-card">{d.pricelist}</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-10 no-border-table">
									<div class="text-drop-card">{d.client.nama_client}</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-10 no-border-table">
									<div class="text-drop-card">{d.lead_marketing}</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-10 no-border-table">
									<div class="text-drop-card">{d.marketing}</div>
								</div>
								<div class="flex flex-direction-col flex-center-vertical flex-center-horizontal w-40">
									<div class="flex w-100 flex-center-vertical">
										<div class="flex flex-center-horizontal flex-center-vertical w-50">
											<div class="text-drop-card padding-spec-nup-1 ">
												<button style="border: 1px solid #0469FF; padding: 4px 6px; color: #0469FF; border-radius: 12px; background-color: transparent;"
												on:click={() => {
													popUpSection = 'atur'
													showPopup(d, 'CF')
												}}>
													Lihat Aturan
												</button>
											</div>
										</div>
										<div class="flex flex-center-horizontal flex-center-vertical w-50">
											{#if d.closing_fee == null}
											<div class="text-pending">Pending</div>
											{:else}
											{#if d.closing_fee.status_finance ==  true}
											<div class="text-approve">Approved</div>
											{:else}
											<div class="text-pending">Pending</div>
											{/if}
											{/if}
										</div>
										<div class="flex flex-center-horizontal flex-center-vertical w-50">
											{#if d.closing_fee == null}
											<div class="text-pending">Pending</div>
											{:else}
											{#if d.closing_fee.status_superadmin ==  true}
											<div class="text-approve">Approved</div>
											{:else}
											<div class="text-pending">Pending</div>
											{/if}
											{/if}
										</div>
										<div class="flex flex-center-horizontal flex-center-vertical w-50">
											{#if d.closing_fee == null}
											<div class="text-drop-card padding-spec-nup-1 ">Tidak Ada</div>
											{:else}
												{#if d.closing_fee.dokumen == null}
												<div class="text-drop-card padding-spec-nup-1 ">Tidak Ada</div>
												{:else}
												<a href="{d.closing_fee.dokumen}" class="no-decor link-detail">lihat</a>
												{/if}
											{/if}
										</div>
									</div>
								</div>
								<div class="flex flex-direction-col flex-center-vertical flex-center-horizontal w-40">
									<div class="flex w-100 flex-center-vertical">
										<div class="flex flex-center-horizontal flex-center-vertical w-50">
											<button style="border: 1px solid #0469FF; padding: 4px 6px; color: #0469FF; border-radius: 12px; background-color: transparent;"
											on:click={() => {
												popUpSection = 'atur'
												showPopup(d, 'DP')
											}}>
												Lihat Aturan
											</button>
										</div>
										<div class="flex flex-center-horizontal flex-center-vertical w-50">
											{#if d.down_payment == null}
											<div class="text-pending">Pending</div>
											{:else}
											{#if d.down_payment.status_finance ==  true}
											<div class="text-approve">Approved</div>
											{:else}
											<div class="text-pending">Pending</div>
											{/if}
											{/if}
										</div>
										<div class="flex flex-center-horizontal flex-center-vertical w-50">
											{#if d.down_payment == null}
											<div class="text-pending">Pending</div>
											{:else}
											{#if d.down_payment.status_superadmin ==  true}
											<div class="text-approve">Approved</div>
											{:else}
											<div class="text-pending">Pending</div>
											{/if}
											{/if}
										</div>
										<div class="flex flex-center-horizontal flex-center-vertical w-50">
											{#if d.down_payment == null}
											<div class="text-drop-card padding-spec-nup-1 ">Tidak Ada</div>
											{:else}
												{#if d.down_payment.dokumen == null}
												<div class="text-drop-card padding-spec-nup-1 ">Tidak Ada</div>
												{:else}
												<a href="{d.down_payment.dokumen}" class="no-decor link-detail">lihat</a>
												{/if}
											{/if}
										</div>
									</div>
								</div>
								<div class="flex flex-direction-col flex-center-vertical flex-center-horizontal w-40">
									<div class="flex w-100 flex-center-vertical">
										<div class="flex flex-center-horizontal flex-center-vertical w-50">
											<button style="border: 1px solid #0469FF; padding: 4px 6px; color: #0469FF; border-radius: 12px; background-color: transparent;"
											on:click={() => {
												popUpSection = 'atur'
												showPopup(d, 'Akad')
											}}>
												Lihat Aturan
											</button>
										</div>
										<div class="flex flex-center-horizontal flex-center-vertical w-50">
											{#if d.akad == null}
											<div class="text-pending">Pending</div>
											{:else}
											{#if d.akad.status_finance ==  true}
											<div class="text-approve">Approved</div>
											{:else}
											<div class="text-pending">Pending</div>
											{/if}
											{/if}
										</div>
										<div class="flex flex-center-horizontal flex-center-vertical w-50">
											{#if d.akad == null}
											<div class="text-pending">Pending</div>
											{:else}
											{#if d.akad.status_superadmin ==  true}
											<div class="text-approve">Approved</div>
											{:else}
											<div class="text-pending">Pending</div>
											{/if}
											{/if}
										</div>
										<div class="flex flex-center-horizontal flex-center-vertical w-50">
											{#if d.akad == null}
											<div class="text-drop-card padding-spec-nup-1 ">Tidak Ada</div>
											{:else}
												{#if d.akad.dokumen == null}
												<div class="text-drop-card padding-spec-nup-1 ">Tidak Ada</div>
												{:else}
												<a href="{d.akad.dokumen}" class="no-decor link-detail">lihat</a>
												{/if}
											{/if}
										</div>
									</div>
								</div>
								<div class="flex flex-direction-row flex-gap-small flex-center-vertical flex-center-horizontal w-10 no-border-table">
									<div class="text-approve">{d.status_komisi}</div>
								</div>
								<div class="flex flex-direction-row flex-gap-small flex-center-horizontal flex-center-vertical w-10 no-border-table">
									<button style="border-radius: 8px; border: 1px solid #0469FF; padding: 4px 8px; background-color: transparent; color: #0469FF; cursor: pointer;" on:click={() => {
										popUpSection = 'bayar'
										showPopup(d, 'CF')
									}}>CF</button>
									<button style="border-radius: 8px; border: 1px solid #0469FF; padding: 4px 8px; background-color: transparent; color: #0469FF; cursor: pointer;" on:click={() => {
										popUpSection = 'bayar'
										showPopup(d, 'DP')
									}}>DP</button>
									<button style="border-radius: 8px; border: 1px solid #0469FF; padding: 4px 8px; background-color: transparent; color: #0469FF; cursor: pointer;"on:click={() => {
										popUpSection = 'bayar'
										showPopup(d, 'Akad')
									}}>Akad</button>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-5 no-border-table">
									<button class="btn-fill-danger flex flex-center-vertical flex-gap-small">Reject</button>
								</div>
							</div>
						</div>
						{/each}
					</div>
					<div class="card w-100 height-fit">
						<div class="flex flex-between-horizontal">
							<div class="flex flex-gap-regular flex-center-vertical">
								<div class="text-display-sort">Menampilkan</div>
								<select class="select-sort">
									<option>10</option>
								</select>
								<div class="text-display-sort">dari <span class="bold-number">{data.length}</span> data Komisi</div>
							</div>
							<div class="flex flex-gap-regular flex-center-vertical">
								<div class="flex flex-center-vertical flex-center-horizontal border-pagination"><img src="/images/icons/Arrow_Left.svg" alt=""></div>
								<div class="flex flex-center-vertical flex-center-horizontal border-pagination"><div class="text-display-sort bold-number" alt="">1</div></div>
								<div class="flex flex-center-vertical flex-center-horizontal border-pagination"><img src="/images/icons/Arrow_Right.svg" alt=""></div>
							</div>
						</div>
					</div>
				</div>
				{/if}
			</div>
		</div>
	</div>
</div>

<div id="pop-up" class="pop-up-background">
	<div class="pop-up-container" style="width: {popUpSection == 'bayar' ? '720px' : '500px'};">
	{#if popUpSection == 'bayar'}
		<div>
			<div class="pop-up-title">Bayar Komisi</div>
			<div class="pop-up-body">Silahkan perhatikan data berikut. Mohon lakukan Transfer Komisi kepada Daftar Penerima yang tertera dan kirimkan ke Nomor Rekening yang tertera. </div>
		</div>
		<div class="w-100" style="display: flex; flex-direction: column; gap: 8px;">
			<div class="pop-up-body-bold" id="target-label">Pembayaran Komisi {activeTipe} NUP: {activeData.id_nup}</div>
			<table class="custom-table">
				<thead>
					<tr>
						<th class="pop-up-body-bold">No<img src="/images/icons/Arrow.svg" alt=""></th>
						<th class="pop-up-body-bold">Penerima<img src="/images/icons/Arrow.svg" alt=""></th>
						<th class="pop-up-body-bold">Sebagai<img src="/images/icons/Arrow.svg" alt=""></th>
						<th class="pop-up-body-bold">Nama Bank<img src="/images/icons/Arrow.svg" alt=""></th>
						<th class="pop-up-body-bold">No. Rekening<img src="/images/icons/Arrow.svg" alt=""></th>
						<th class="pop-up-body-bold">Nominal<img src="/images/icons/Arrow.svg" alt=""></th>
					</tr>
				</thead>
				<tbody>
					{#if activeTipe == 'CF'}
					{#if activeData.closing_fee == null}
					<tr>
						<td class="pop-up-body-bold" align="center" colspan="6">Belum ada aturan Komisi!</td>
					</tr>
					{:else}
					{#each activeData.closing_fee.data_pembayaran as d, i}
					<tr>
						<td class="pop-up-body-bold" align="center">{i+1}</td>
						<td class="pop-up-body-bold">{d.penerima}</td>
						<td class="pop-up-body-bold">{d.role}</td>
						<td class="pop-up-body-bold">{d.nama_bank}</td>
						<td class="pop-up-body-bold">{d.no_rekening}</td>
						<td class="pop-up-body-bold">{toIDR(d.nominal)}</td>
					</tr>
					{/each}
					<tr>
						<td class="pop-up-body-bold" align="center" colspan="5">Total Biaya</td>
						<td class="pop-up-body-bold">{
							toIDR(activeData.closing_fee.data_pembayaran.reduce((acc, elm) => {
								return acc + parseInt(elm.nominal)
							}, 0))
						}</td>
					</tr>
					{/if}
					{:else if activeTipe == 'DP'}
					{#if activeData.down_payment == null}
					<tr>
						<td class="pop-up-body-bold" align="center" colspan="6">Belum ada aturan Komisi!</td>
					</tr>
					{:else}
					{#each activeData.down_payment.data_pembayaran as d, i}
					<tr>
						<td class="pop-up-body-bold" align="center">{i+1}</td>
						<td class="pop-up-body-bold">{d.penerima}</td>
						<td class="pop-up-body-bold">{d.role}</td>
						<td class="pop-up-body-bold">{d.nama_bank}</td>
						<td class="pop-up-body-bold">{d.no_rekening}</td>
						<td class="pop-up-body-bold">{toIDR(d.nominal)}</td>
					</tr>
					{/each}
					<tr>
						<td class="pop-up-body-bold" align="center" colspan="5">Total Biaya</td>
						<td class="pop-up-body-bold">{
							toIDR(activeData.closing_fee.data_pembayaran.reduce((acc, elm) => {
								return acc + parseInt(elm.nominal)
							}, 0))
						}</td>
					</tr>
					{/if}
					{:else if activeTipe == 'Akad'}
					{#if activeData.akad == null}
					<tr>
						<td class="pop-up-body-bold" align="center" colspan="6">Belum ada aturan Komisi!</td>
					</tr>
					{:else}
					{#each activeData.akad.data_pembayaran as d, i}
					<tr>
						<td class="pop-up-body-bold" align="center">{i+1}</td>
						<td class="pop-up-body-bold">{d.penerima}</td>
						<td class="pop-up-body-bold">{d.role}</td>
						<td class="pop-up-body-bold">{d.nama_bank}</td>
						<td class="pop-up-body-bold">{d.no_rekening}</td>
						<td class="pop-up-body-bold">{toIDR(d.nominal)}</td>
					</tr>
					{/each}
					<tr>
						<td class="pop-up-body-bold" align="center" colspan="5">Total Biaya</td>
						<td class="pop-up-body-bold">{
							toIDR(activeData.closing_fee.data_pembayaran.reduce((acc, elm) => {
								return acc + parseInt(elm.nominal)
							}, 0))
						}</td>
					</tr>
					{/if}
					{/if}
				</tbody>
			</table>
			<div class="flex flex-direction-col flex-gap-small w-50" id="input-berkas">
				<div class="pop-up-body-bold">
					Berkas Bukti Transfer
				</div> 
				<input type="file" class="file-nup" id="dokumen" accept="application/pdf, image/*">
			</div>
		</div>
		<div class="flex flex-end-horizontal w-100">
			<div class="flex flex-gap-regular flex-end-horizontal">
				<button class="btn-outline flex flex-center-vertical flex-gap-small" on:click={closePopup}>
					<span>Batal</span>
				</button>
				{#if activeTipe == 'CF' && activeData.closing_fee != null}
				<button class="btn-fill flex flex-center-vertical flex-gap-small" on:click={bayarKomisi}>
					<span>Bayar</span>
				</button>
				{/if}

				{#if activeTipe == 'DP' && activeData.down_payment != null}
				<button class="btn-fill flex flex-center-vertical flex-gap-small" on:click={bayarKomisi}>
					<span>Bayar</span>
				</button>
				{/if}

				{#if activeTipe == 'Akad' && activeData.akad != null}
				<button class="btn-fill flex flex-center-vertical flex-gap-small" on:click={bayarKomisi}>
					<span>Bayar</span>
				</button>
				{/if}
			</div>
		</div>
	{:else if popUpSection == 'atur'}
		<div>
			<div class="pop-up-title">Aturan Komisi</div>
		</div>
		<div class="w-100" style="display: flex; flex-direction: column; gap: 8px;">
			<div class="pop-up-body-bold">Aturan Komisi {activeTipe} NUP: {activeData.id_nup}</div>
			{#if activeTipe == 'CF' && activeData.closing_fee == null}
			<div class="pop-up-body-bold">Belum ada Aturan Komisi Closing Fee!</div>
			{:else if activeTipe == 'DP' && activeData.down_payment == null}
			<div class="pop-up-body-bold">Belum ada Aturan Komisi Down Payment!</div>
			{:else if activeTipe == 'Akad' && activeData.akad == null}
			<div class="pop-up-body-bold">Belum ada Aturan Komisi Akad!</div>
			{/if}

			{#if activeTipe == 'CF' && activeData.closing_fee != null}
			<div class="pop-up-body-bold">Tanggal Berlaku: {activeData.closing_fee.tanggal_berlaku == null ? '' : toDate(activeData.closing_fee.tanggal_berlaku.split("T")[0])}</div>
			<div class="pop-up-body-bold">Terakhir Diubah: {activeData.closing_fee.tanggal == null ? '' : toDate(activeData.closing_fee.tanggal.split("T")[0])}</div>
			{:else if activeTipe == 'DP' && activeData.down_payment != null}
			<div class="pop-up-body-bold">Tanggal Berlaku: {activeData.down_payment.tanggal_berlaku == null ? '' : toDate(activeData.down_payment.tanggal_berlaku.split("T")[0])}</div>
			<div class="pop-up-body-bold">Terakhir Diubah: {activeData.down_payment.tanggal == null ? '' : toDate(activeData.down_payment.tanggal.split("T")[0])}</div>
			{:else if activeTipe == 'Akad' && activeData.akad != null}
			<div class="pop-up-body-bold">Tanggal Berlaku: {activeData.akad.tanggal_berlaku == null ? '' : toDate(activeData.akad.tanggal_berlaku.split("T")[0])}</div>
			<div class="pop-up-body-bold">Terakhir Diubah: {activeData.akad.tanggal == null ? '' : toDate(activeData.akad.tanggal.split("T")[0])}</div>
			{/if}
		</div>
		{#if (activeTipe == 'CF' && activeData.closing_fee == null) || (activeTipe == 'DP' && activeData.down_payment == null) || (activeTipe == 'Akad' && activeData.akad == null)}		
		<div style="display: none"></div>
		{:else}
		<div class="w-100" style="display: flex; flex-direction: column; gap: 8px;">
			<table class="custom-table">
				<thead>
					<tr>
						<th class="pop-up-body-bold">Penerima<img src="/images/icons/Arrow.svg" alt=""></th>
						<th class="pop-up-body-bold">Sebagai<img src="/images/icons/Arrow.svg" alt=""></th>
						<th class="pop-up-body-bold">Nominal<img src="/images/icons/Arrow.svg" alt=""></th>
					</tr>
				</thead>
				<tbody>
					{#if activeTipe == 'CF'}
					{#each activeData.closing_fee.data_pembayaran as d, i}
					<tr>
						<td class="pop-up-body-bold">{d.penerima}</td>
						<td class="pop-up-body-bold">{d.role}</td>
						<td class="pop-up-body-bold">{toIDR(d.nominal)}</td>
					</tr>
					{/each}
					<tr>
						<td class="pop-up-body-bold" align="center" colspan="2">Total Biaya</td>
						<td class="pop-up-body-bold">{
							toIDR(activeData.closing_fee.data_pembayaran.reduce((acc, elm) => {
								return acc + parseInt(elm.nominal)
							}, 0))
						}</td>
					</tr>
					{:else if activeTipe == 'DP'}
					{#each activeData.down_payment.data_pembayaran as d, i}
					<tr>
						<td class="pop-up-body-bold">{d.penerima}</td>
						<td class="pop-up-body-bold">{d.role}</td>
						<td class="pop-up-body-bold">{toIDR(d.nominal)}</td>
					</tr>
					{/each}
					<tr>
						<td class="pop-up-body-bold" align="center" colspan="2">Total Biaya</td>
						<td class="pop-up-body-bold">{
							toIDR(activeData.closing_fee.data_pembayaran.reduce((acc, elm) => {
								return acc + parseInt(elm.nominal)
							}, 0))
						}</td>
					</tr>
					{:else if activeTipe == 'Akad'}
					{#each activeData.akad.data_pembayaran as d, i}
					<tr>
						<td class="pop-up-body-bold">{d.penerima}</td>
						<td class="pop-up-body-bold">{d.role}</td>
						<td class="pop-up-body-bold">{toIDR(d.nominal)}</td>
					</tr>
					{/each}
					<tr>
						<td class="pop-up-body-bold" align="center" colspan="2">Total Biaya</td>
						<td class="pop-up-body-bold">{
							toIDR(activeData.closing_fee.data_pembayaran.reduce((acc, elm) => {
								return acc + parseInt(elm.nominal)
							}, 0))
						}</td>
					</tr>
					{/if}
				</tbody>
			</table>
		</div>
		{/if}
		<div class="flex flex-gap-regular w-100">
			<button class="btn-outline flex flex-center-vertical flex-center-horizontal flex-gap-small" on:click={closePopup} style="flex: 1;">
				<span>Tutup</span>
			</button> 
			<!-- {#if (activeTipe == 'CF' && activeData.closing_fee == null) || (activeTipe == 'DP' && activeData.down_payment == null) || (activeTipe == 'Akad' && activeData.akad == null)}
			<button class="btn-fill flex flex-center-vertical flex-center-horizontal flex-gap-small" style="flex: 1;" on:click={() => popUpSection = 'form-atur'}>
				<span>Atur</span>
			</button>
			{:else}
			<button class="btn-fill-warning flex flex-center-vertical flex-center-horizontal flex-gap-small" style="flex: 1;" on:click={() => popUpSection = 'form-atur-edit'}>
				<span>Edit</span>
			</button>
			{/if} -->
		</div>
	{:else if popUpSection == 'form-atur'}
		<div>
			<div class="pop-up-title">Aturan Komisi</div>
		</div>
		<div class="w-100" style="display: flex; flex-direction: column; gap: 8px;">
			<div class="pop-up-body-bold">
				Aturan Komisi {activeTipe} NUP: {activeData.id_nup} <br>
				Harga Unit: {toIDR(activeData.harga_unit)} <br>
				Versi Pricelist: {activeData.pricelist}
			</div>
			<div class="flex flex-gap-regular">
				<div class="flex flex-direction-col flex-gap-small w-50">
					<div class="pop-up-body-bold">Tanggal Berlaku</div> 
					<input type="date" class="input-nup" id="tanggal-berlaku">
				</div>
			</div>
			<div class="flex flex-gap-regular">
				<div class="flex flex-direction-col flex-gap-small w-50">
					<div class="pop-up-body-bold">Nama Agensi</div> 
					<input type="text" class="input-nup" id="agensi">
				</div>
				<div class="flex flex-direction-col flex-gap-small w-50">
					<div class="pop-up-body-bold">Nominal Agensi</div> 
					<input type="number" class="input-nup" id="nominal-agensi">
				</div>
			</div>
			<div class="flex flex-gap-regular">
				<div class="flex flex-direction-col flex-gap-small w-50">
					<div class="pop-up-body-bold">Nama Head Marketing</div> 
					<input type="text" class="input-nup" id="head-marketing" value="{activeData.lead_marketing}" disabled>
				</div>
				<div class="flex flex-direction-col flex-gap-small w-50">
					<div class="pop-up-body-bold">Nominal Head Marketing</div> 
					<input type="number" class="input-nup" id="nominal-head-marketing">
				</div>
			</div>
			<div class="flex flex-gap-regular">
				<div class="flex flex-direction-col flex-gap-small w-50">
					<div class="pop-up-body-bold">Nama Marketing</div> 
					<input type="text" class="input-nup" id="marketing" value="{activeData.marketing}" disabled>
				</div>
				<div class="flex flex-direction-col flex-gap-small w-50">
					<div class="pop-up-body-bold">Nominal Marketing</div> 
					<input type="number" class="input-nup" id="nominal-marketing">
				</div>
			</div>
			{#if activeTipe == 'Akad'}
			<div class="flex flex-gap-regular">
				<div class="flex flex-direction-col flex-gap-small w-50">
					<div class="pop-up-body-bold">Nominal AMS</div> 
					<input type="number" class="input-nup" id="nominal-ams">
				</div>
			</div>
			{/if}
		</div>
		<div class="flex flex-gap-regular w-100">
			<button class="btn-outline flex flex-center-vertical flex-center-horizontal flex-gap-small" on:click={() => popUpSection = 'atur'} style="flex: 1;">
				<span>Batal</span>
			</button> 
			<button class="btn-fill flex flex-center-vertical flex-center-horizontal flex-gap-small" style="flex: 1;" on:click={aturKomisi}>
				<span>Atur</span>
			</button>
		</div>
		{:else if popUpSection == 'form-atur-edit'}
		<div>
			<div class="pop-up-title">Edit Aturan Komisi</div>
		</div>
		<div class="w-100" style="display: flex; flex-direction: column; gap: 8px;">
			<div class="pop-up-body-bold">
				Aturan Komisi {activeTipe} NUP: {activeData.id_nup} <br>
				Harga Unit: {toIDR(activeData.harga_unit)} <br>
				Versi Pricelist: {activeData.pricelist}
			</div>
			<div class="flex flex-gap-regular">
				<div class="flex flex-direction-col flex-gap-small w-50">
					<div class="pop-up-body-bold">Tanggal Berlaku</div>
					{#if activeTipe == 'CF'}
					<input type="date" class="input-nup" id="tanggal-berlaku" value="{activeData.closing_fee.tanggal_berlaku == null ? '' : activeData.closing_fee.tanggal_berlaku}">
					{:else if activeTipe == 'DP'}
					<input type="date" class="input-nup" id="tanggal-berlaku" value="{activeData.down_payment.tanggal_berlaku == null ? '' : activeData.down_payment.tanggal_berlaku}">
					{:else if activeTipe == 'Akad'}
					<input type="date" class="input-nup" id="tanggal-berlaku" value="{activeData.akad.tanggal_berlaku == null ? '' : activeData.akad.tanggal_berlaku}">
					{/if}
				</div>
			</div>
			<div class="flex flex-gap-regular">
				<div class="flex flex-direction-col flex-gap-small w-50">
					<div class="pop-up-body-bold">Nama Agensi</div> 
					{#if activeTipe == 'CF'}
					<input type="text" class="input-nup" id="agensi" value="{activeData.closing_fee.data_pembayaran.filter(elm => elm.role == 'Agensi')[0].penerima}">
					{:else if activeTipe == 'DP'}
					<input type="text" class="input-nup" id="agensi" value="{activeData.down_payment.data_pembayaran.filter(elm => elm.role == 'Agensi')[0].penerima}">
					{:else if activeTipe == 'Akad'}
					<input type="text" class="input-nup" id="agensi" value="{activeData.akad.data_pembayaran.filter(elm => elm.role == 'Agensi')[0].penerima}">
					{/if}
				</div>
				<div class="flex flex-direction-col flex-gap-small w-50">
					<div class="pop-up-body-bold">Nominal Agensi</div>
					{#if activeTipe == 'CF'}
					<input type="number" class="input-nup" id="nominal-agensi" value="{activeData.closing_fee.data_pembayaran.filter(elm => elm.role == 'Agensi')[0].nominal}">
					{:else if activeTipe == 'DP'}
					<input type="number" class="input-nup" id="nominal-agensi" value="{activeData.down_payment.data_pembayaran.filter(elm => elm.role == 'Agensi')[0].nominal}">
					{:else if activeTipe == 'Akad'}
					<input type="number" class="input-nup" id="nominal-agensi" value="{activeData.akad.data_pembayaran.filter(elm => elm.role == 'Agensi')[0].nominal}">
					{/if}
				</div>
			</div>
			<div class="flex flex-gap-regular">
				<div class="flex flex-direction-col flex-gap-small w-50">
					<div class="pop-up-body-bold">Nama Head Marketing</div> 
					<input type="text" class="input-nup" id="head-marketing" value="{activeData.lead_marketing}" disabled>
				</div>
				<div class="flex flex-direction-col flex-gap-small w-50">
					<div class="pop-up-body-bold">Nominal Head Marketing</div>
					{#if activeTipe == 'CF'}
					<input type="number" class="input-nup" id="nominal-head-marketing" value="{activeData.closing_fee.data_pembayaran.filter(elm => elm.role == 'Head Marketing')[0].nominal}">
					{:else if activeTipe == 'DP'}
					<input type="number" class="input-nup" id="nominal-head-marketing" value="{activeData.down_payment.data_pembayaran.filter(elm => elm.role == 'Head Marketing')[0].nominal}">
					{:else if activeTipe == 'Akad'}
					<input type="number" class="input-nup" id="nominal-head-marketing" value="{activeData.akad.data_pembayaran.filter(elm => elm.role == 'Head Marketing')[0].nominal}">
					{/if}
				</div>
			</div>
			<div class="flex flex-gap-regular">
				<div class="flex flex-direction-col flex-gap-small w-50">
					<div class="pop-up-body-bold">Nama Marketing</div> 
					<input type="text" class="input-nup" id="marketing" value="{activeData.marketing}" disabled>
				</div>
				<div class="flex flex-direction-col flex-gap-small w-50">
					<div class="pop-up-body-bold">Nominal Marketing</div>
					{#if activeTipe == 'CF'}
					<input type="number" class="input-nup" id="nominal-marketing" value="{activeData.closing_fee.data_pembayaran.filter(elm => elm.role == 'Marketing')[0].nominal}">
					{:else if activeTipe == 'DP'}
					<input type="number" class="input-nup" id="nominal-marketing" value="{activeData.down_payment.data_pembayaran.filter(elm => elm.role == 'Marketing')[0].nominal}">
					{:else if activeTipe == 'Akad'}
					<input type="number" class="input-nup" id="nominal-marketing" value="{activeData.akad.data_pembayaran.filter(elm => elm.role == 'Marketing')[0].nominal}">
					{/if}
				</div>
			</div>
			{#if activeTipe == 'Akad'}
			<div class="flex flex-gap-regular">
				<div class="flex flex-direction-col flex-gap-small w-50">
					<div class="pop-up-body-bold">Nominal AMS</div> 
					<input type="number" class="input-nup" id="nominal-ams" value="{activeData.akad.data_pembayaran.filter(elm => elm.role == 'AMS')[0].nominal}">
				</div>
			</div>
			{/if}
		</div>
		<div class="flex flex-gap-regular w-100">
			<button class="btn-outline flex flex-center-vertical flex-center-horizontal flex-gap-small" on:click={() => popUpSection = 'atur'} style="flex: 1;">
				<span>Batal</span>
			</button> 
			<button class="btn-fill flex flex-center-vertical flex-center-horizontal flex-gap-small" style="flex: 1;" on:click={aturKomisi}>
				<span>Simpan Perubahan</span>
			</button>
		</div>
	{:else if popUpSection == 'atur-success'}
		<div>
			<div class="pop-up-title">Berhasil di Atur!</div>
		</div>
		<div class="w-100" style="display: flex; flex-direction: column; gap: 8px;">
			<div class="pop-up-body-bold">Aturan Komisi {activeTipe} telah berhasil di simpan!</div>
		</div>
		<div class="flex flex-gap-regular w-100">
			<button class="btn-outline flex flex-center-vertical flex-center-horizontal flex-gap-small" on:click={() => window.location.reload()} style="flex: 1;">
				<span>Tutup</span>
			</button> 
		</div>
	{:else if popUpSection == 'bayar-success'}
		<div>
			<div class="pop-up-title">Pembayaran Berhasil!</div>
		</div>
		<div class="w-100" style="display: flex; flex-direction: column; gap: 8px;">
			<div class="pop-up-body-bold">Pembayaran komisi anda telah disimpan!</div>
		</div>
		<div class="flex flex-gap-regular w-100">
			<button class="btn-outline flex flex-center-vertical flex-center-horizontal flex-gap-small" on:click={() => window.location.reload()} style="flex: 1;">
				<span>Tutup</span>
			</button> 
		</div>
	{/if}
	</div>
</div>