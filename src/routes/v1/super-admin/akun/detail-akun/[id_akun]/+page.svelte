<script type="text/javascript">
	import Sidebar from '../../../../../../components/sidebar.svelte'
	import Navbar from '../../../../../../components/navbar.svelte'
	import { onMount } from 'svelte';
	import {fly, scale} from 'svelte/transition'
	import ApiController from '../../../../../../ApiController';

	export let data

	let id = data.params.id_akun
	let detailData = null

	let accountStatus = false
	let pengajuan = true

	let approvePhase = 1
	let marketingType = "Marketing"

	let perumData = null
	let leadData = null
	let selectedPerum = ''

	let getDetail = () => {
		ApiController({
			method:"GET",
			endpoint:`account/${id}`
		}).then(response => {
			detailData = response.data.data
			marketingType = detailData.jenis_akun
			console.log(detailData)
		})
	}

	let getPerum = () => {
		ApiController({
			method: "GET",
			endpoint: "perumahan"
		}).then(response => {
			perumData = response.data.data
		})
	}

	let getLeadMarketing = () => {
		ApiController({
			method: "GET",
			endpoint: 'lead-marketing'
		}).then(response => {
			leadData = response.data.data
		})
	}

	let changeAccountStatus = () => {
		let endpoint = ''

		if(detailData.status_akun == 'active'){
			endpoint = `account/${id}/shutdown`
		}else{
			endpoint = `account/${id}/activate`
		}

		ApiController({
			method:"POST",
			endpoint : endpoint
		}).then(response => {
			alert(response.data.message)
			getDetail()
		})
	}

	let createAlert = (inputId, msg) => {
		if(document.getElementById(`alert-${inputId}`)){
			document.getElementById(`alert-${inputId}`).remove()
		}

		let parent = document.getElementById(inputId).parentElement
		parent = parent.parentElement
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

	let rejectAkun = () => {
		ApiController({
			method:"POST",
			endpoint:`account/${id}/reject`
		}).then(response => {
			alert(response.data.message)
			getDetail()
		})
	}

	let approveAkun = (id_perum, id_lead) => {
		ApiController({
			method:"POST",
			endpoint:`account/${id}/approve`,
			datas : {
				id_perumahan: id_perum,
				id_lead_marketing: id_lead
			}
		}).then(response => {
			console.log(response)
			getDetail()
			approvePhase = 4
		})
	}

	onMount(async () => {
		getDetail()
		getPerum()
		getLeadMarketing()
	})
</script>

<div id="after-login-layout">
	<Navbar/>
	<div class="flex">
		<Sidebar statusPointer="Akun" pagePointer="admin"/>
		<div class="w-80 content">
			<div class="flex flex-direction-col flex-gap-large" in:fly={{ y: -20, duration: 600 }}>
				<div class="flex flex-between-horizontal flex-center-vertical w-100">
					<div class="flex  flex-direction-col flex-between-horizontal flex-gap-semi-small w-50">
						<div class="title-content">Detail Akun</div>
						<div class="flex flex-gap-regular flex-center-vertical">
							<div class="text-breadcrumb">Akun</div>
							<img src="/images/icons/Arrow_Right.svg" alt="">
							<div class="text-breadcrumb-active">Detail</div>
						</div>
					</div>
					<div class="flex flex-gap-regular">
						{#if detailData != null}
						{#if detailData.status_akun.includes('Mengajukan')}
						<button class="btn-fill-danger flex flex-center-vertical flex-gap-small" on:click={() => {
							rejectAkun()
						}}> 
							<span>Reject</span>
						</button>
						<button class="btn-fill flex flex-center-vertical flex-gap-small" on:click={() => document.getElementById('pop-up').style.display = 'flex'}> 
							<span>Approve</span>
						</button>
						{:else}
						<!-- <a href="/super-admin/akun/edit/1" class="no-decor">
							<button class="btn-fill-warning flex flex-center-vertical flex-gap-small">
								<img src="/images/icons/Edit_White.svg" alt="">
								<span>Edit</span>
							</button>
						</a> -->
						{#if detailData.status_akun == 'active'}
						<button class="btn-fill-danger flex flex-center-vertical flex-gap-small" on:click={changeAccountStatus}> 
							<span>Non-Aktifkan</span>
						</button>
						{:else if detailData.status_akun == 'non-active'}
						<button class="btn-fill flex flex-center-vertical flex-gap-small" on:click={changeAccountStatus}> 
							<span>Aktifkan</span>
						</button>
						{/if}
						{/if}
						{/if}
					</div>
				</div>
				<div class="flex flex-gap-large w-100">
					<div class="card w-30 flex flex-direction-col flex-gap-regular">
						<img src="/images/avatar.svg" class="w-100 img-detail-akun" alt="">
						{#if detailData != null}
						{#if detailData.status_akun == 'active'}
						<div class="label-success flex flex-center-horizontal flex-gap-small w-100">
							<span>{detailData.jenis_akun}</span>
							<img src="/images/icons/Check_White.svg" alt="">
						</div>
						{:else if detailData.status_akun == 'non-active'}
						<div class="label-danger flex flex-center-horizontal flex-gap-small w-100">
							<span>{detailData.jenis_akun}</span>
							<img src="/images/icons/Octagon_Warning.svg" alt="">
						</div>
						{:else if detailData.status_akun == 'rejected'}
						<div class="label-danger flex flex-center-horizontal flex-gap-small w-100">
							<span>Rejected</span>
							<img src="/images/icons/Octagon_Warning.svg" alt="">
						</div>
						{:else}
						<div class="label-pending flex flex-center-horizontal flex-gap-small w-100">
							<span>{detailData.status_akun}</span>
							<img src="/images/icons/Info.svg" alt="">
						</div>
						{/if}
						{/if}
						<div class="kode-akun text-center">Kode: {id == null ? '' : id}</div>
					</div>
					<div class="card w-70 flex flex-direction-col flex-gap-large">
						<div class="flex flex-direction-col ">
							<div class="flex flex-between-horizontal flex-center-vertical">
								<div class="w-100 flex flex-direction-col flex-gap-semi-large">
									<div class="main-title-card-detail">Informasi Personal</div>
									{#if detailData != null}
									<div class="flex w-100">
										<div class="flex flex-direction-col w-50">
											<div class="caption-card-detail">Nama Lengkap</div>
											<div class="content-card-detail">{detailData.nama == null ? '' : detailData.nama}</div>
										</div>
										<div class="flex flex-direction-col w-50">
											<div class="caption-card-detail">Nomor KTP</div>
											<div class="content-card-detail">{detailData.no_ktp == null ? '-' : detailData.no_ktp}</div>
										</div>
									</div>
									<div class="flex w-100">
										<div class="flex flex-direction-col w-50">
											<div class="caption-card-detail">Alamat Email</div>
											<div class="content-card-detail">{detailData.email == null ? '-' : detailData.email}</div>
										</div>
										<div class="flex flex-direction-col w-50">
											<div class="caption-card-detail">Nomor HP</div>
											<div class="content-card-detail">{detailData.no_hp == null ? '-' : detailData.no_hp}</div>
										</div>
									</div>
									<div class="flex w-100">
										<div class="flex flex-direction-col w-100">
											<div class="caption-card-detail">Alamat Lengkap</div>
											<div class="content-card-detail">{detailData.alamat == null ? '-' : detailData.alamat}</div>
										</div>
									</div>
									<div class="flex w-100">
										<div class="flex flex-direction-col w-50">
											<div class="caption-card-detail">Penempatan</div>
											<div class="content-card-detail">{detailData.perumahan == undefined ? 'Belum ditempatkan' : detailData.perumahan}</div>
										</div>
									</div>
									{/if}
								</div>
							</div>
						</div>
					</div>
				</div>
				{#if detailData != null}
				{#if detailData.jenis_akun == 'Marketing' || detailData.jenis_akun == 'Head Marketing'}
				<div class="flex flex-gap-large w-100">
					<div class="card w-30 flex flex-direction-col flex-gap-semi-large">
						<div class="main-title-card-detail">Informasi Bank</div>
						<div class="flex w-100">
							<div class="flex flex-direction-col w-100">
								<div class="caption-card-detail">Nama Bank</div>
								<div class="content-card-detail">{detailData.informasi_bank.nama_bank == null ? '' : detailData.informasi_bank.nama_bank}</div>
							</div>
						</div>
						<div class="flex w-100">
							<div class="flex flex-direction-col w-100">
								<div class="caption-card-detail">No. Rekening</div>
								<div class="content-card-detail">{detailData.informasi_bank.no_rekening == null ? '' : detailData.informasi_bank.no_rekening}</div>
							</div>
						</div>
						<div class="flex w-100">
							<div class="flex flex-direction-col w-100">
								<div class="caption-card-detail">Nama di Rekening Bank</div>
								<div class="content-card-detail">{detailData.informasi_bank.nama_rekening == null ? '' : detailData.informasi_bank.nama_rekening}</div>
							</div>
						</div>
						<div class="flex w-100">
							<div class="flex flex-direction-col w-100">
								<div class="caption-card-detail">Cabang Bank</div>
								<div class="content-card-detail">{detailData.informasi_bank.cabang_bank == null ? '' : detailData.informasi_bank.cabang_bank}</div>
							</div>
						</div>
					</div>
					<div class="card w-70 flex flex-direction-col flex-gap-large">
						<div class="flex flex-direction-col ">
							<div class="flex flex-between-horizontal flex-center-vertical">
								<div class="w-100 flex flex-direction-col flex-gap-semi-large">
									<div class="main-title-card-detail">Berkas</div>
									<div class="flex w-100">
										<div class="flex flex-direction-col w-50">
											<div class="caption-card-detail">Pas Foto 3x4</div>	
											<div class="flex flex-center-vertical flex-gap-semi-small">
												{#if detailData.berkas.pas_photo != null || detailData.berkas.pas_photo != ''}
												<a href="{detailData.berkas.pas_photo}" class="no-decor link-detail-akun">Lihat Berkas</a>
												<img src="/images/icons/External_Link.svg" alt="">
												{:else}
												<div class="text-reject">Tidak Tersedia</div>
												{/if}
											</div>
										</div>
										<div class="flex flex-direction-col w-50">
											<div class="caption-card-detail">NPWP</div>
											<div class="flex flex-center-vertical flex-gap-semi-small">
												{#if detailData.berkas.fc_npwp != null || detailData.berkas.fc_npwp != ''}
												<a href="{detailData.berkas.fc_npwp}" class="no-decor link-detail-akun">Lihat Berkas</a>
												<img src="/images/icons/External_Link.svg" alt="">
												{:else}
												<div class="text-reject">Tidak Tersedia</div>
												{/if}
											</div>
										</div>
									</div>
									<div class="flex w-100">
										<div class="flex flex-direction-col w-50">
											<div class="caption-card-detail">KTP</div>
											<div class="flex flex-center-vertical flex-gap-semi-small">
												{#if detailData.berkas.fc_ktp != null || detailData.berkas.fc_ktp != ''}
												<a href="{detailData.berkas.fc_ktp}" class="no-decor link-detail-akun">Lihat Berkas</a>
												<img src="/images/icons/External_Link.svg" alt="">
												{:else}
												<div class="text-reject">Tidak Tersedia</div>
												{/if}
											</div>
										</div>
										<div class="flex flex-direction-col w-50">
											<div class="caption-card-detail">Surat Perjanjian Kerja</div>
											<div class="flex flex-center-vertical flex-gap-semi-small">
												{#if detailData.berkas.surat_perjanjian_kerja != null || detailData.berkas.surat_perjanjian_kerja != ''}
												<a href="{detailData.berkas.surat_perjanjian_kerja}" class="no-decor link-detail-akun">Lihat Berkas</a>
												<img src="/images/icons/External_Link.svg" alt="">
												{:else}
												<div class="text-reject">Tidak Tersedia</div>
												{/if}
											</div>
										</div>
									</div>
									<div class="flex w-100">
										<div class="flex flex-direction-col w-100">
											<div class="caption-card-detail">Buku Rekening (Halaman Depan)</div>
											<div class="flex flex-center-vertical flex-gap-semi-small">
												{#if detailData.berkas.fc_rekening != null || detailData.berkas.fc_rekening != ''}
												<a href="{detailData.berkas.fc_rekening}" class="no-decor link-detail-akun">Lihat Berkas</a>
												<img src="/images/icons/External_Link.svg" alt="">
												{:else}
												<div class="text-reject">Tidak Tersedia</div>
												{/if}
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/if}
				{/if}
			</div>
		</div>
	</div>
</div>

<div id="pop-up" class="pop-up-background">
	<div class="pop-up-container" style="width: 350px;">
		{#if approvePhase == 1} 
		<div class="w-100" style="display: flex; flex-direction: column; gap: 8px;">
			<div class="pop-up-title">Approve Pengajuan?</div>
			<div class="pop-up-body">Anda akan melakukan Approval terhadap akun ini. Silahkan cek kembali kelengkapan dan keabsahan data sebelum melakukan Approval.</div>
		</div>
		<div class="flex w-100 flex-gap-regular">
			<button class="btn-outline flex flex-center-vertical flex-center-horizontal flex-gap-small" on:click={() => {
				document.getElementById('pop-up').style.display = 'none'
			}} style="flex: 1;">
				<span>Tutup</span>
			</button> 
			<button class="btn-fill flex flex-center-vertical flex-center-horizontal flex-gap-small" on:click={() => ++approvePhase} style="flex: 1;">
				<span>Approve</span>
			</button>
		</div>
		{:else if approvePhase == 2}
		<div class="w-100" style="display: flex; flex-direction: column; gap: 8px;">
			<div class="pop-up-title">Konfirmasi Penempatan</div>
			<div class="pop-up-body">Calon Marketing atas nama: {detailData == null ? '' : detailData.nama} mendaftar sebagai {detailData == null ? '' : detailData.jenis_akun}. Pastikan data Calon {detailData == null ? '' : detailData.jenis_akun} sudah sesuai dengan Syarat dan Ketentuan yang berlaku.</div>
			<div class="flex flex-direction-row" style="gap: 8px;">
				<input type="checkbox" id="pernyataan">
				<label for="pernyataan" class="pop-up-body-bold">Sesuai Syarat dan Ketentuan</label>
			</div>
		</div>
		<div class="flex w-100 flex-gap-regular">
			<button class="btn-outline flex flex-center-vertical flex-center-horizontal flex-gap-small" on:click={() => {
				--approvePhase
			}} style="flex: 1;">
				<span>Batal</span>
			</button> 
			<button class="btn-fill flex flex-center-vertical flex-center-horizontal flex-gap-small" on:click={() => {
				if(!document.getElementById('pernyataan').checked){
					createAlert('pernyataan', 'Mohon pastikan Calon sudah memenuhi Syarat dan Ketentuan!')
					return
				}

				if(detailData.jenis_akun != "Head Marketing"){
					approveAkun(detailData.informasi_team_marketing.perumahan.id_perumahan, detailData.informasi_team_marketing.marketing_lead.id_user)
				}else{
					++approvePhase
				}
			}} style="flex: 1;">
				<span>Konfirmasi</span>
			</button>
		</div>
		{:else if approvePhase == 3}
		<div class="w-100" style="display: flex; flex-direction: column; gap: 8px;">
			<div class="pop-up-title">Pilih Perumahan</div>
			<div class="pop-up-body">Tentukan Perumahan untuk Calon {detailData == null ? '' : detailData.jenis_akun} yang akan ditempatkan!</div>
			<div class="flex flex-direction-col flex-gap-small w-100">
				<div class="title-input-nup">Pilih Perumahan<span class="obligatory-input">*</span></div>
				<select class="select-nup" id="perum">
					{#if perumData != null}
					{#each perumData as d}
					<option value="{d.id_perumahan}">{d.nama}</option>
					{/each}
					{/if}
				</select>
			</div>
		</div>
		<div class="flex w-100 flex-gap-regular">
			<button class="btn-outline flex flex-center-vertical flex-center-horizontal flex-gap-small" on:click={() => {
				--approvePhase
			}} style="flex: 1;">
				<span>Kembali</span>
			</button> 
			<button class="btn-fill flex flex-center-vertical flex-center-horizontal flex-gap-small" on:click={() => {
				if(detailData.jenis_akun == "Head Marketing"){
					selectedPerum = perumData.filter(elm => elm.id_perumahan == document.getElementById('perum').value)[0].nama
					approveAkun(document.getElementById('perum').value, id)
				}
			}} style="flex: 1;">
				<span>Konfirmasi</span>
			</button>
		</div>
		{:else if approvePhase == 4}
		<div class="w-100" style="display: flex; flex-direction: column; gap: 8px;">
			<div class="pop-up-title">Penempatan Berhasil</div>
			{#if detailData.jenis_akun == 'Head Marketing'}
			<div class="pop-up-body">{detailData.jenis_akun} atas nama: <span class="pop-up-body-bold">{detailData.nama}</span> Telah terdaftar sebagai {detailData.jenis_akun} dan berhasil ditempatkan di {selectedPerum}.</div>
			{:else}
			<div class="pop-up-body">{detailData.jenis_akun} atas nama: <span class="pop-up-body-bold">{detailData.nama}</span> Telah terdaftar sebagai {detailData.jenis_akun} di bawah Head Marketing atas nama: <span class="pop-up-body-bold">{detailData.informasi_team_marketing.marketing_lead.nama}</span> berhasil ditempatkan di {detailData.informasi_team_marketing.perumahan.nama}.</div>
			{/if}
		</div>
		<div class="flex w-100 flex-gap-regular">
			<button class="btn-fill flex flex-center-vertical flex-center-horizontal flex-gap-small" on:click={() => {
				approvePhase = 1
				pengajuan = false
				accountStatus = true
				document.getElementById('pop-up').style.display = 'none'
			}} style="flex: 1;">
				<span>Tutup</span>
			</button>
		</div>
		{/if}
	</div>
</div>