<script type="text/javascript">
	import Sidebar from '../../../../../../components/sidebar.svelte'
	import Navbar from '../../../../../../components/navbar.svelte'
	import { onMount } from 'svelte';
	import {fly, scale} from 'svelte/transition'
	import ApiController from '../../../../../../ApiController';

	export let data

	let informasiUnit = null
	let informasiKomisi = null
	let dataKavling = null
	let client = null
	let marketing = null
	let informasiDP = null
	let berkas = null
	let informasiBank = null
	let suratSP3UR = null
	let suratSP3K = null
	let suratSPPH = null
	let suratSPPKR = null
	let komisiPTDA = null
	let pembayaran = null
	let informasiHeadFinance = null
	let isReady = false

	let getDetailData = () => {
		ApiController({
			method: 'GET',
			endpoint: `unit/${data.params.slug}`
		}).then(response => {
			let detailData = response.data
			informasiUnit = detailData.informasi_unit
			informasiKomisi = detailData.informasi_komisi
			dataKavling = detailData.data_kavling
			client = detailData.client
			marketing = detailData.marketing
			informasiDP = detailData.informasi_dp
			berkas = detailData.berkas
			informasiBank = detailData.informasi_bank
			suratSP3UR = detailData.surat.filter(s => {return s.jenis_surat == "SP3UR"})[0]
			suratSP3K = detailData.surat.filter(s => {return s.jenis_surat == "SP3K"})[0]
			suratSPPH = detailData.surat.filter(s => {return s.jenis_surat == "SPPH"})[0]
			suratSPPKR = detailData.surat.filter(s => {return s.jenis_surat == "SPPKR"})[0]
			komisiPTDA = detailData.komisi_ptda
			pembayaran = detailData.pembayaran
			informasiHeadFinance = detailData.informasi_head_finance
			isReady = true
		})
	}
	
	onMount(() => {
		getDetailData()
	})

</script>

<div id="after-login-layout">
	<Navbar/>
	<div class="flex">
		<Sidebar statusPointer="Kompilasi" pagePointer="admin"/>
		<div class="w-80 content">
			<div class="flex flex-direction-col flex-gap-large" in:fly={{ y: -20, duration: 600 }}>
				<div class="flex flex-between-horizontal flex-center-vertical w-100">
					<div class="flex  flex-direction-col flex-between-horizontal flex-gap-semi-small w-100">
						<div class="title-content">Detail Unit</div>
						<div class="flex flex-gap-regular flex-center-vertical">
							<div class="text-breadcrumb">Data Kompilasi Perumahan</div>
							<img src="/images/icons/Arrow_Right.svg">
							<div class="text-breadcrumb-active">Detail</div>
						</div>
					</div>
					<div class="flex flex-gap-regular">
						<a href="/super-admin/kompilasi-perumahan/edit-kompilasi-perumahan" class="no-decor"><button class="btn-fill-warning flex flex-center-vertical flex-gap-small"><img src="/images/icons/Edit_White.svg"> <span>Edit</span></button></a>
						<a href="/super-admin/nup/detail-nup" class="no-decor"><button class="btn-fill-danger flex flex-center-vertical flex-gap-small"><img src="/images/icons/Trash_White.svg"> <span>Hapus</span></button></a>
					</div>
				</div>
				{#if isReady}
				<div class="flex flex-gap-large w-100">
					<div class="card w-60 flex flex-direction-col flex-gap-large">
						<div class="flex w-100 flex-gap-semi-large">
							<div class="w-50">
								<img class="img-detail w-100 h-100" src="/images/rumah.png">
							</div>
							<div class="w-50 flex flex-direction-col flex-gap-large">
								<div class="flex flex-between-horizontal flex-center-vertical">
									<div class="w-50 flex flex-direction-col flex-gap-small">
										<div class="main-title-card-detail">Informasi Unit</div>
									</div>
									<div class="w-50 flex flex-gap-regular flex-end-horizontal">
										<div class="{parseFloat(informasiUnit.progress.replace("%", "")) < 50 ? 'label-danger' : 'label-success'} flex flex-center-horizontal flex-gap-small">
											<span>{informasiUnit.progress}</span>
										</div>
									</div>
								</div>
								<div class="flex flex-direction-col flex-gap-regular">
									<div class="w-100 flex flex-gap-regular">
										<div class="flex flex-direction-col">
											<div class="caption-card-detail">Unit Akad</div>
											<div class="content-card-detail-{informasiUnit.unit_akad == true ? 'success' : 'danger'}">{informasiUnit.unit_akad == true ? 'Sudah' : 'Belum'}</div>
										</div>
										<div class="flex flex-direction-col">
											<div class="caption-card-detail">Tanggal Akad</div>
											<div class="content-card-detail">{informasiUnit.tanggal_akad}</div>
										</div>
									</div>
									<div class="w-100 flex flex-gap-regular">
										<div class="flex flex-direction-col">
											<div class="caption-card-detail">No SPK</div>
											<div class="content-card-detail">{informasiUnit.no_spk}</div>
										</div>
									</div>
									<div class="w-100 flex flex-gap-regular">
										<div class="flex flex-direction-col">
											<div class="caption-card-detail">Target SPK</div>
											<div class="content-card-detail">{informasiUnit.target_spk}</div>
										</div>
									</div>
									<div class="w-100 flex flex-gap-regular">
										<div class="flex flex-direction-col">
											<div class="caption-card-detail">Subkon/Mandor</div>
											<div class="content-card-detail">{informasiUnit.mandor}</div>
										</div>
									</div>
									<div class="w-100 flex flex-gap-regular">
										<div class="flex flex-direction-col">
											<div class="caption-card-detail">Perum</div>
											<div class="content-card-detail">{informasiUnit.perumahan}</div>
										</div>
									</div>
									<div class="w-100 flex flex-between-horizontal">
										<div class="flex flex-direction-col">
											<div class="caption-card-detail">Blok</div>
											<div class="content-card-detail">{informasiUnit.blok.trim()}</div>
										</div>
										<div class="flex flex-direction-col">
											<div class="caption-card-detail">No. Rumah</div>
											<div class="content-card-detail">{informasiUnit.no_rumah}</div>
										</div>
										<div class="flex flex-direction-col">
											<div class="caption-card-detail">Unit</div>
											<div class="content-card-detail">{informasiUnit.unit}</div>
										</div>
										<div class="flex flex-direction-col">
											<div class="caption-card-detail">Lantai</div>
											<div class="content-card-detail">{informasiUnit.lantai}</div>
										</div>
										<div class="flex flex-direction-col">
											<div class="caption-card-detail">Type</div>
											<div class="content-card-detail">{informasiUnit.tipe}</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="flex w-100 flex-direction-col flex-gap-semi-large">
							<div class="w-100 flex">
								<div class="flex flex-direction-col w-25">
									<div class="caption-card-detail">Mulai Pembangunan</div>
									<div class="content-card-detail">{new Date(informasiUnit.mulai_pembangunan.split(" ")[0].split("-")[0], informasiUnit.mulai_pembangunan.split(" ")[0].split("-")[1], informasiUnit.mulai_pembangunan.split(" ")[0].split("-")[2]).toLocaleDateString('id', {dateStyle:'medium'})}</div>
								</div>
								<div class="flex flex-direction-col w-25">
									<div class="caption-card-detail">Target Selesai</div>
									<div class="content-card-detail">{new Date(informasiUnit.target_selesai.split(" ")[0].split("-")[0], informasiUnit.target_selesai.split(" ")[0].split("-")[1], informasiUnit.target_selesai.split(" ")[0].split("-")[2]).toLocaleDateString('id', {dateStyle:'medium'})}</div>
								</div>
								<div class="flex flex-direction-col w-25">
									<div class="caption-card-detail">Sisa Waktu</div>
									<div class="content-card-detail">{informasiUnit.sisa_waktu} hari</div>
								</div>
								<div class="flex flex-direction-col w-25">
									<div class="caption-card-detail">Selesai Pembangunan</div>
									<div class="content-card-detail">{informasiUnit.selesai_pembangunan}</div>
								</div>
							</div>
							<div class="w-100 flex">
								<div class="flex flex-direction-col flex-gap-small w-100">
									<div class="caption-card-detail">Keterangan</div>
									<div class="caption-card-detail">{informasiUnit.keterangan}</div>
								</div>
							</div>
							<div class="w-100 flex">
								<div class="flex flex-direction-col w-20">
									<div class="caption-card-detail">Stok Unit</div>
									<div class="content-card-detail-success">Ready</div>
								</div>
								<div class="flex flex-direction-col w-30">
									<div class="caption-card-detail">Harga Unit</div>
									<div class="content-card-detail">Rp. {informasiUnit.harga_unit}</div>
								</div>
								<div class="flex flex-direction-col w-25">
									<div class="caption-card-detail">Versi Price List</div>
									<div class="content-card-detail">{informasiUnit.versi_pricelist}</div>
								</div>
							</div>
						</div>
					</div>
					<div class="card w-40 flex flex-direction-col flex-gap-large">
						{#each informasiKomisi as komisi}
						{#if komisi.jenis_komisi == "Booking Fee"}
						<div class="card-secondary flex flex-direction-col flex-gap-regular">
							<div class="flex flex-between-horizontal flex-center-horizontal w-100">
								<div class="caption-card-detail-2">Komisi: {komisi.jenis_komisi}</div>
								<a href="#" class="no-decor link-detail">bukti pembayaran</a>
							</div>
							<div class="flex flex-gap-regular w-100">
								<div class="flex flex-direction-col w-31">
									<div class="caption-card-detail">Pihak 1</div>
									<div class="content-card-detail">Agensi</div>
								</div>
								<div class="flex flex-direction-col w-31">
									<div class="caption-card-detail">Pihak 2</div>
									<div class="content-card-detail">Head Marketing</div>
								</div>
								<div class="flex flex-direction-col w-31">
									<div class="caption-card-detail">Pihak 3</div>
									<div class="content-card-detail">Marketing</div>
								</div>
							</div>
							<div class="flex flex-gap-regular w-100">
								<div class="flex flex-direction-col w-31">
									<div class="caption-card-detail">Nominal</div>
									<div class="content-card-detail">Rp. {komisi.nominal_penerima_1}</div>
								</div>
								<div class="flex flex-direction-col w-31">
									<div class="caption-card-detail">Nominal</div>
									<div class="content-card-detail">Rp. {komisi.nominal_penerima_2}</div>
								</div>
								<div class="flex flex-direction-col w-31">
									<div class="caption-card-detail">Nominal</div>
									<div class="content-card-detail">Rp. {komisi.nominal_penerima_3}</div>
								</div>
							</div>
						</div>
						{:else if komisi.jenis_komisi == "Down Payment"}
						<div class="card-secondary flex flex-direction-col flex-gap-regular">
							<div class="flex flex-between-horizontal flex-center-horizontal w-100">
								<div class="caption-card-detail-2">Komisi: {komisi.jenis_komisi}</div>
								<a href="#" class="no-decor link-detail">bukti pembayaran</a>
							</div>
							<div class="flex flex-gap-regular w-100">
								<div class="flex flex-direction-col w-31">
									<div class="caption-card-detail">Pihak 1</div>
									<div class="content-card-detail">Agensi</div>
								</div>
								<div class="flex flex-direction-col w-31">
									<div class="caption-card-detail">Pihak 2</div>
									<div class="content-card-detail">Head Marketing</div>
								</div>
								<div class="flex flex-direction-col w-31">
									<div class="caption-card-detail">Pihak 3</div>
									<div class="content-card-detail">Marketing</div>
								</div>
							</div>
							<div class="flex flex-gap-regular w-100">
								<div class="flex flex-direction-col w-31">
									<div class="caption-card-detail">Nominal</div>
									<div class="content-card-detail">Rp. {komisi.nominal_penerima_1}</div>
								</div>
								<div class="flex flex-direction-col w-31">
									<div class="caption-card-detail">Nominal</div>
									<div class="content-card-detail">Rp. {komisi.nominal_penerima_2}</div>
								</div>
								<div class="flex flex-direction-col w-31">
									<div class="caption-card-detail">Nominal</div>
									<div class="content-card-detail">Rp. {komisi.nominal_penerima_3}</div>
								</div>
							</div>
						</div>
						{:else if komisi.jenis_komisi == "Akad"}
						<div class="card-secondary flex flex-direction-col flex-gap-regular">
							<div class="flex flex-between-horizontal flex-center-horizontal w-100">
								<div class="caption-card-detail-2">Komisi: Akad</div>
								<a href="#" class="no-decor link-detail">bukti pembayaran</a>
							</div>
							<div class="flex flex-gap-regular w-100">
								<div class="flex flex-direction-col w-31">
									<div class="caption-card-detail">Pihak 1</div>
									<div class="content-card-detail">Agensi</div>
								</div>
								<div class="flex flex-direction-col w-31">
									<div class="caption-card-detail">Pihak 2</div>
									<div class="content-card-detail">Head Marketing</div>
								</div>
								<div class="flex flex-direction-col w-31">
									<div class="caption-card-detail">Pihak 3</div>
									<div class="content-card-detail">Marketing</div>
								</div>
							</div>
							<div class="flex flex-gap-regular w-100">
								<div class="flex flex-direction-col w-31">
									<div class="caption-card-detail">Nominal</div>
									<div class="content-card-detail">Rp. 1.000.000</div>
								</div>
								<div class="flex flex-direction-col w-31">
									<div class="caption-card-detail">Nominal</div>
									<div class="content-card-detail">Rp. 1.000.000</div>
								</div>
								<div class="flex flex-direction-col w-31">
									<div class="caption-card-detail">Nominal</div>
									<div class="content-card-detail">Rp. 1.000.000</div>
								</div>
							</div>
							<div class="flex flex-gap-regular w-100"></div>
							<div class="flex flex-gap-regular w-100">
								<div class="flex flex-direction-col w-31">
									<div class="content-card-detail">Bonus SPV</div>
								</div>
								<div class="flex flex-direction-col w-31">
									<div class="content-card-detail">Bonus AMS</div>
								</div>
							</div>
							<div class="flex flex-gap-regular w-100">
								<div class="flex flex-direction-col w-31">
									<div class="caption-card-detail">Nominal</div>
									<div class="content-card-detail">Rp. 1.000.000</div>
								</div>
								<div class="flex flex-direction-col w-31">
									<div class="caption-card-detail">Nominal</div>
									<div class="content-card-detail">Rp. 1.000.000</div>
								</div>
							</div>
						</div>
						{/if}
						{/each}
					</div>
				</div>
				<div class="flex w-100 flex-gap-large">
					<div class="card w-50 flex flex-gap-semi-large flex-direction-col">
						<div class="w-100 flex flex-direction-col flex-gap-large">
							<div class="flex flex-gap-regular">
								<div class="w-100 flex flex-direction-col flex-gap-regular">
									<div class="secondary-title-card-detail">Kavling Siap Bangun</div>
									<div class="flex w-100">
										<div class="flex flex-direction-col w-50">
											<div class="caption-card-detail">Tanggal Mulai Land Clearing</div>
											<div class="content-card-detail">{new Date(dataKavling.mulai_pembangunan.split(" ")[0].split("-")[0], dataKavling.mulai_pembangunan.split(" ")[0].split("-")[1], dataKavling.mulai_pembangunan.split(" ")[0].split("-")[2]).toLocaleDateString('id', {dateStyle:'medium'})}</div>
										</div>
									</div>
									<div class="flex w-100">
										<div class="flex flex-direction-col w-50">
											<div class="caption-card-detail">Target Selesai</div>
											<div class="content-card-detail">{new Date(dataKavling.target_selesai.split(" ")[0].split("-")[0], dataKavling.target_selesai.split(" ")[0].split("-")[1], dataKavling.target_selesai.split(" ")[0].split("-")[2]).toLocaleDateString('id', {dateStyle:'medium'})}</div>
										</div>
									</div>
									<div class="flex w-100">
										<div class="flex flex-direction-col w-50">
											<div class="caption-card-detail">Sisa Waktu</div>
											<div class="content-card-detail">{dataKavling.sisa_waktu} hari</div>
										</div>
									</div>
									<div class="flex w-100">
										<div class="flex flex-direction-col w-50">
											<div class="caption-card-detail">Selesai Pengerjaan</div>
											<div class="content-card-detail">{dataKavling.selesai_pembangunan}</div>
										</div>
									</div>
									<div class="w-100 flex">
										<div class="flex flex-direction-col flex-gap-small w-100">
											<div class="caption-card-detail">Keterangan</div>
											<div class="caption-card-detail">{dataKavling.keterangan}</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="w-50 flex flex-direction-col flex-gap-large">
						<div class="card w-100 flex flex-gap-semi-large flex-direction-col">
							<div class="w-100 flex flex-direction-col flex-gap-large">
								<div class="flex flex-gap-regular">
									<div class="w-100 flex flex-direction-col flex-gap-regular">
										<div class="secondary-title-card-detail">Pemesan</div>
										<div class="flex w-100">
											<div class="flex flex-direction-col w-50">
												<div class="caption-card-detail">Nama Pemesan</div>
												<div class="content-card-detail">{client.nama_client}</div>
											</div>
											<div class="flex flex-direction-col w-50">
												<div class="caption-card-detail">Nomor KTP</div>
												<div class="content-card-detail">{client.no_ktp}</div>
											</div>
										</div>
										<div class="flex w-100">
											<div class="flex flex-direction-col w-50">
												<div class="caption-card-detail">Nomor Telepon</div>
												<div class="content-card-detail">{client.no_hp}</div>
											</div>
											<div class="flex flex-direction-col w-50">
												<div class="caption-card-detail">NPWP</div>
												<div class="content-card-detail">{client.npwp}</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="card w-100 flex flex-gap-semi-large flex-direction-col h-100 flex-center-horizontal">
							<div class="w-100 flex flex-direction-col flex-gap-large">
								<div class="flex flex-gap-regular">
									<div class="w-100 flex flex-direction-col flex-gap-regular">
										<div class="secondary-title-card-detail">Marketing</div>
										<div class="flex w-100">
											<div class="flex flex-direction-col w-50">
												<div class="caption-card-detail">Head Marketing</div>
												<div class="content-card-detail">{marketing.head_marketing}</div>
											</div>
											<div class="flex flex-direction-col w-50">
												<div class="caption-card-detail">Marketing</div>
												<div class="content-card-detail">{marketing.marketing}</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="flex w-100 flex-gap-large">
					<div class="card w-50 flex flex-gap-semi-large flex-direction-col">
						<div class="w-100 flex flex-direction-col flex-gap-large">
							<div class="flex flex-gap-regular">
								<div class="w-100 flex flex-direction-col flex-gap-regular">
									<div class="secondary-title-card-detail">Informasi Down Payment</div>
									<div class="flex w-100">
										<div class="flex flex-direction-col w-50">
											<div class="caption-card-detail">Nominal Pembayaran DP</div>
											<div class="content-card-detail">Rp. 3.100.000</div>
										</div>
										<div class="flex flex-direction-col w-50">
											<div class="caption-card-detail">Tanggal Pembayaran DP</div>
											<div class="content-card-detail">17 Mar 2023</div>
										</div>
									</div>
									<div class="flex w-100">
										<div class="flex flex-direction-col w-50">
											<div class="caption-card-detail">Metode Pembayaran</div>
											<div class="content-card-detail">Transfer</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="card-secondary flex flex-direction-col flex-gap-semi-small">
							<div class="caption-card-detail">Dokumen Pendukung</div>
							<div class="flex">
								<div class="w-50">
									<div class="flex flex-direction-col">
										<div class="caption-card-detail">Bukti Pembayaran</div>	
										<a href="#" class="no-decor link-detail">lihat</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="w-50 flex flex-direction-col flex-gap-large">
						<div class="card w-100 flex flex-gap-semi-large flex-direction-col">
							<div class="w-100 flex flex-direction-col flex-gap-large">
								<div class="flex flex-gap-regular">
									<div class="w-100 flex flex-direction-col flex-gap-regular">
										<div class="flex flex-center-vertical flex-between-horizontal">
											<div class="secondary-title-card-detail">Berkas-Berkas</div>
											<button class="btn-outline flex flex-center-vertical flex-gap-small"><span>Atur</span></button>
										</div>
										<div class="flex w-100">
											<div class="flex flex-direction-col w-25">
												<div class="caption-card-detail">Pengajuan Ke</div>
												<div class="content-card-detail">Bank</div>
											</div>
											<div class="flex flex-direction-col w-15">
												<div class="caption-card-detail">Kredit</div>
												<div class="content-card-detail-success">Ya</div>
											</div>
											<div class="flex flex-direction-col w-25">
												<div class="caption-card-detail">Proses Kredit</div>
												<a href="#" class="no-decor link-detail">lihat</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="card w-100 flex flex-gap-semi-large flex-direction-col h-100 flex-center-horizontal">
							<div class="w-100 flex flex-direction-col flex-gap-large">
								<div class="flex flex-gap-regular">
									<div class="w-100 flex flex-direction-col flex-gap-regular">
										<div class="secondary-title-card-detail">Informasi Bank</div>
										<div class="flex w-100">
											<div class="flex flex-direction-col w-50">
												<div class="caption-card-detail">Nama Bank</div>
												<div class="content-card-detail">{informasiBank.bank}</div>
											</div>
											<div class="flex flex-direction-col w-50">
												<div class="caption-card-detail">No. Rekening</div>
												<div class="content-card-detail">{informasiBank.no_rek}</div>
											</div>
										</div>
										<div class="flex w-100">
											<div class="flex flex-direction-col w-50">
												<div class="caption-card-detail">Nama di Rekening Bank</div>
												<div class="content-card-detail">{informasiBank.nama_client}</div>
											</div>
											<div class="flex flex-direction-col w-50">
												<div class="caption-card-detail">Cabang Bank</div>
												<div class="content-card-detail">{informasiBank.cabang_bank}</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="flex w-100 flex-gap-large">
					<div class="card w-50 flex flex-gap-semi-large flex-direction-col">
						<div class="w-100 flex flex-direction-col flex-gap-large">
							<div class="flex flex-gap-regular">
								<div class="w-100 flex flex-direction-col flex-gap-regular">
									<div class="flex flex-center-vertical flex-between-horizontal">
										<div class="secondary-title-card-detail">SP3UR</div>
									</div>
									<div class="flex w-100">
										<div class="flex flex-direction-col w-50">
											<div class="caption-card-detail">Nomor Surat</div>
											<div class="content-card-detail">{suratSP3UR.nomor_surat}</div>
										</div>
										<div class="flex flex-direction-col w-50">
											<div class="caption-card-detail">Tanggal Surat</div>
											<div class="content-card-detail">{new Date(suratSP3UR.tanggal_surat.split(" ")[0].split("-")[0], suratSP3UR.tanggal_surat.split(" ")[0].split("-")[1], suratSP3UR.tanggal_surat.split(" ")[0].split("-")[2]).toLocaleDateString('id', {dateStyle:'medium'})}</div>
										</div>
									</div>
									<div class="flex w-100">
										<div class="flex flex-direction-col w-50">
											<div class="caption-card-detail">Pindah Unit</div>
											<div class="content-card-detail">{suratSP3UR.pindah_unit}</div>
										</div>
										<div class="flex flex-direction-col w-50">
											<div class="caption-card-detail">Plafond KPR</div>
											<div class="content-card-detail">Rp. {suratSP3UR.plafond_kpr}</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="card-secondary flex flex-direction-col flex-gap-semi-small">
							<div class="caption-card-detail">Dokumen Pendukung</div>
							<div class="flex">
								<div class="flex w-100">
									<div class="flex flex-direction-col w-50">
										<div class="caption-card-detail">Dokumen SP3UR</div>	
										<a href="#" class="no-decor link-detail">lihat</a>
									</div>
									<div class="flex flex-direction-col w-50">
										<div class="caption-card-detail">Surat Pernyataan Pindah Unit</div>	
										<div class="content-card-detail">-</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="card w-50 flex flex-gap-semi-large flex-direction-col">
						<div class="w-100 flex flex-direction-col flex-gap-large">
							<div class="flex flex-gap-regular">
								<div class="w-100 flex flex-direction-col flex-gap-regular">
									<div class="flex flex-center-vertical flex-between-horizontal">
										<div class="secondary-title-card-detail">SP3K</div>
									</div>
									<div class="flex w-100">
										<div class="flex flex-direction-col w-50">
											<div class="caption-card-detail">Nomor Surat</div>
											<div class="content-card-detail">{suratSP3K.nomor_surat}</div>
										</div>
										<div class="flex flex-direction-col w-50">
											<div class="caption-card-detail">Tanggal Surat</div>
											<div class="content-card-detail">{new Date(suratSP3K.tanggal_surat.split(" ")[0].split("-")[0], suratSP3K.tanggal_surat.split(" ")[0].split("-")[1], suratSP3K.tanggal_surat.split(" ")[0].split("-")[2]).toLocaleDateString('id', {dateStyle:'medium'})}</div>
										</div>
									</div>
									<div class="flex w-100">
										<div class="flex flex-direction-col w-50">
											<div class="caption-card-detail">Plafond KPR</div>
											<div class="content-card-detail">Rp. {suratSP3K.plafond_kpr} </div>
										</div>
										<div class="flex flex-direction-col w-50">
											<div class="caption-card-detail">FLPP/BP2BT/SSB</div>
											<div class="content-card-detail">{suratSP3K.flpp}</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="card-secondary flex flex-direction-col flex-gap-semi-small">
							<div class="caption-card-detail">Dokumen Pendukung</div>
							<div class="flex">
								<div class="flex w-100">
									<div class="flex flex-direction-col w-50">
										<div class="caption-card-detail">Dokumen SP3K</div>	
										<a href="#" class="no-decor link-detail">lihat</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="flex w-100 flex-gap-large">
					<div class="card w-50 flex flex-gap-semi-large flex-direction-col">
						<div class="w-100 flex flex-direction-col flex-gap-large">
							<div class="flex flex-gap-regular">
								<div class="w-100 flex flex-direction-col flex-gap-regular">
									<div class="flex flex-center-vertical flex-between-horizontal">
										<div class="secondary-title-card-detail">SPPH</div>
									</div>
									<div class="flex w-100">
										<div class="flex flex-direction-col w-50">
											<div class="caption-card-detail">Nomor Surat</div>
											<div class="content-card-detail">{suratSPPH.nomor_surat}</div>
										</div>
										<div class="flex flex-direction-col w-50">
											<div class="caption-card-detail">Tanggal Surat</div>
											<div class="content-card-detail">{new Date(suratSPPH.tanggal_surat.split(" ")[0].split("-")[0], suratSPPH.tanggal_surat.split(" ")[0].split("-")[1], suratSPPH.tanggal_surat.split(" ")[0].split("-")[2]).toLocaleDateString('id', {dateStyle:'medium'})}</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="card-secondary flex flex-direction-col flex-gap-semi-small">
							<div class="caption-card-detail">Dokumen Pendukung</div>
							<div class="flex">
								<div class="flex w-100">
									<div class="flex flex-direction-col w-50">
										<div class="caption-card-detail">Dokumen SPPH</div>	
										<a href="#" class="no-decor link-detail">lihat</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="card w-50 flex flex-gap-semi-large flex-direction-col">
						<div class="w-100 flex flex-direction-col flex-gap-large">
							<div class="flex flex-gap-regular">
								<div class="w-100 flex flex-direction-col flex-gap-regular">
									<div class="flex flex-center-vertical flex-between-horizontal">
										<div class="secondary-title-card-detail">SPPKR</div>
									</div>
									<div class="flex w-100">
										<div class="flex flex-direction-col w-50">
											<div class="caption-card-detail">Nomor Surat</div>
											<div class="content-card-detail">{suratSPPKR.nomor_surat}</div>
										</div>
										<div class="flex flex-direction-col w-50">
											<div class="caption-card-detail">Tanggal Surat</div>
											<div class="content-card-detail">{new Date(suratSPPKR.tanggal_surat.split(" ")[0].split("-")[0], suratSPPKR.tanggal_surat.split(" ")[0].split("-")[1], suratSPPKR.tanggal_surat.split(" ")[0].split("-")[2]).toLocaleDateString('id', {dateStyle:'medium'})}</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="card-secondary flex flex-direction-col flex-gap-semi-small">
							<div class="caption-card-detail">Dokumen Pendukung</div>
							<div class="flex">
								<div class="flex w-100">
									<div class="flex flex-direction-col w-50">
										<div class="caption-card-detail">Dokumen SPPKR</div>	
										<a href="#" class="no-decor link-detail">lihat</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="flex w-100 flex-gap-large">
					<div class="card w-100 flex flex-gap-semi-large flex-direction-col">
						<div class="w-100 flex flex-direction-col flex-gap-large">
							<div class="flex flex-gap-regular">
								<div class="w-100 flex flex-direction-col flex-gap-regular">
									<div class="flex flex-center-vertical flex-between-horizontal">
										<div class="secondary-title-card-detail">Komisi PTDA</div>
									</div>
									<div class="flex flex-gap-regular w-100">
										<div class="flex flex-direction-col w-30">
											<div class="caption-card-detail">Nominal BM</div>
											<div class="content-card-detail">Rp. {komisiPTDA.nominal_bm}</div>
										</div>
										<div class="flex flex-direction-col w-40">
											<div class="caption-card-detail">Tanggal Pembayaran BM</div>
											<div class="content-card-detail">{new Date(komisiPTDA.tanggal_pembayaran_bm.split(" ")[0].split("-")[0], komisiPTDA.tanggal_pembayaran_bm.split(" ")[0].split("-")[1], komisiPTDA.tanggal_pembayaran_bm.split(" ")[0].split("-")[2]).toLocaleDateString('id', {dateStyle:'medium'})}</div>
										</div>
										<div class="flex flex-direction-col w-30">
											<div class="caption-card-detail">Bukti Pembayaran</div>
											<a href="#" class="no-decor link-detail">lihat</a>
										</div>
									</div>
									<div class="flex flex-gap-regular w-100">
										<div class="flex flex-direction-col w-30">
											<div class="caption-card-detail">Nominal MCLU</div>
											<div class="content-card-detail">Rp. {komisiPTDA.nominal_mclu}</div>
										</div>
										<div class="flex flex-direction-col w-40">
											<div class="caption-card-detail">Tanggal Pembayaran MCLU</div>
											<div class="content-card-detail">{new Date(komisiPTDA.tanggal_pembayaran_mclu.split(" ")[0].split("-")[0], komisiPTDA.tanggal_pembayaran_mclu.split(" ")[0].split("-")[1], komisiPTDA.tanggal_pembayaran_mclu.split(" ")[0].split("-")[2]).toLocaleDateString('id', {dateStyle:'medium'})}</div>
										</div>
										<div class="flex flex-direction-col w-30">
											<div class="caption-card-detail">Bukti Pembayaran</div>
											<a href="#" class="no-decor link-detail">lihat</a>
										</div>
									</div>
									<div class="flex flex-gap-regular w-100">
										<div class="flex flex-direction-col w-30">
											<div class="caption-card-detail">Nominal LS</div>
											<div class="content-card-detail">Rp. {komisiPTDA.nominal_ls}</div>
										</div>
										<div class="flex flex-direction-col w-40">
											<div class="caption-card-detail">Tanggal Pembayaran LS</div>
											<div class="content-card-detail">{new Date(komisiPTDA.tanggal_pembayaran_ls.split(" ")[0].split("-")[0], komisiPTDA.tanggal_pembayaran_ls.split(" ")[0].split("-")[1], komisiPTDA.tanggal_pembayaran_ls.split(" ")[0].split("-")[2]).toLocaleDateString('id', {dateStyle:'medium'})}</div>
										</div>
										<div class="flex flex-direction-col w-30">
											<div class="caption-card-detail">Bukti Pembayaran</div>
											<a href="#" class="no-decor link-detail">lihat</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="flex w-100 flex-gap-large">
					<div class="card w-100 flex flex-gap-semi-large flex-direction-col">
						<div class="w-100 flex flex-direction-col flex-gap-large">
							<div class="flex flex-gap-regular">
								<div class="w-100 flex flex-direction-col flex-gap-regular">
									<div class="flex flex-center-vertical flex-between-horizontal">
										<div class="secondary-title-card-detail">Informasi Head Finance</div>
									</div>
									<div class="flex w-100">
										<div class="flex flex-direction-col w-10">
											<div class="caption-card-detail">Nama Notaris</div>
											<div class="content-card-detail">Ghina</div>
										</div>
										<div class="flex flex-direction-col w-10">
											<div class="caption-card-detail">Plafond</div>
											<div class="content-card-detail">Rp. 128.000.000 </div>
										</div>
										<div class="flex flex-direction-col w-10">
											<div class="caption-card-detail">Besar Plafond</div>
											<div class="content-card-detail">Rp. 134.900.000 </div>
										</div>
										<div class="flex flex-direction-col w-10">
											<div class="caption-card-detail">Pencairan</div>
											<div class="content-card-detail">Rp. 110.300.000 </div>
										</div>
										<div class="flex flex-direction-col w-10">
											<div class="caption-card-detail">Retensi</div>
											<div class="content-card-detail">Rp. 13.200.000  </div>
										</div>
										<div class="flex flex-direction-col w-10">
											<div class="caption-card-detail">Retensi Cair</div>
											<div class="content-card-detail">Rp. 13.200.000  </div>
										</div>
										<div class="flex flex-direction-col w-10">
											<div class="caption-card-detail">Pengajuan</div>
											<div class="content-card-detail">-</div>
										</div>
										<div class="flex flex-direction-col w-10">
											<div class="caption-card-detail">Sisa Retensi</div>
											<div class="content-card-detail">-</div>
										</div>
										<div class="flex flex-direction-col w-10">
											<div class="caption-card-detail">Rekap</div>
											<div class="content-card-detail">Rp. 13.200.000</div>
										</div>
										<div class="flex flex-direction-col w-10">
											<div class="caption-card-detail">Bukti Pencairan</div>
											<a href="#" class="no-decor link-detail">lihat</a>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="flex w-100 flex-gap-regular">
							<div class="flex flex-direction-col w-50">
								<div class="card-secondary flex flex-direction-col flex-gap-semi-small">
									<div class="w-100 flex flex-direction-col flex-gap-regular">
										<div class="flex flex-center-vertical flex-between-horizontal">
											<div class="title-secondary-card">Notaris</div>
											<a href="#" class="no-decor link-detail">bukti pembayaran</a>
										</div>
										<div class="flex flex-gap-regular w-100">
											<div class="flex flex-direction-col w-25">
												<div class="caption-card-detail">PPH</div>
												<div class="content-card-detail">Rp. 4.900.000 </div>
											</div>
											<div class="flex flex-direction-col w-25">
												<div class="caption-card-detail">Tanggal Bayar</div>
												<div class="content-card-detail">23 Jun 2022</div>
											</div>
											<div class="flex flex-direction-col w-25">
												<div class="caption-card-detail">BPHTB</div>
												<div class="content-card-detail">Rp. 4.900.000 </div>
											</div>
											<div class="flex flex-direction-col w-25">
												<div class="caption-card-detail">Tanggal Bayar</div>
												<div class="content-card-detail">23 Jun 2022 </div>
											</div>
										</div>
										<div class="flex flex-gap-regular w-100">
											<div class="flex flex-direction-col w-25">
												<div class="caption-card-detail">ROYA</div>
												<div class="content-card-detail">Rp. 4.900.000 </div>
											</div>
											<div class="flex flex-direction-col w-25">
												<div class="caption-card-detail">Tanggal Bayar</div>
												<div class="content-card-detail">23 Jun 2022</div>
											</div>
											<div class="flex flex-direction-col w-25">
												<div class="caption-card-detail">Biaya Notaris</div>
												<div class="content-card-detail">Rp. 4.900.000 </div>
											</div>
											<div class="flex flex-direction-col w-25">
												<div class="caption-card-detail">Tanggal Bayar</div>
												<div class="content-card-detail">23 Jun 2022 </div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="flex flex-direction-col w-50">
								<div class="card-secondary flex flex-direction-col flex-gap-semi-small">
									<div class="w-100 flex flex-direction-col flex-gap-regular">
										<div class="flex flex-center-vertical flex-between-horizontal">
											<div class="title-secondary-card">PPJB/AJB</div>
										</div>
										<div class="flex flex-gap-regular w-100">
											<div class="flex flex-direction-col w-31">
												<div class="caption-card-detail">Nilai</div>
												<div class="content-card-detail">Rp. 134.900.000 </div>
											</div>
											<div class="flex flex-direction-col w-31">
												<div class="caption-card-detail">Diajukan</div>
												<div class="content-card-detail">Rp. 134.900.000</div>
											</div>
											<div class="flex flex-direction-col w-31">
												<div class="caption-card-detail">Tanggal Cair</div>
												<div class="content-card-detail">23 Jun 2022 </div>
											</div>
										</div>
										<div class="flex flex-gap-regular w-100">
											<div class="flex flex-direction-col w-31">
												<div class="caption-card-detail">Outstanding</div>
												<div class="content-card-detail">Rp. 134.900.000 </div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="flex w-100 flex-gap-regular">
							<div class="flex flex-direction-col w-33">
								<div class="card-secondary flex flex-direction-col flex-gap-semi-small">
									<div class="w-100 flex flex-direction-col flex-gap-regular">
										<div class="flex flex-center-vertical flex-between-horizontal">
											<div class="title-secondary-card">SPPH</div>
										</div>
										<div class="flex flex-gap-regular w-100">
											<div class="flex flex-direction-col w-50">
												<div class="caption-card-detail">Selisih Plafond</div>
												<div class="content-card-detail">Rp. 4.900.000 </div>
											</div>
											<div class="flex flex-direction-col w-50">
												<div class="caption-card-detail">Tanggal Bayar</div>
												<div class="content-card-detail">23 Jun 2022</div>
											</div>
										</div>
										<div class="flex flex-gap-regular w-100">
											<div class="flex flex-direction-col w-50">
												<div class="caption-card-detail">Selisih Notaris</div>
												<div class="content-card-detail">Rp. 4.900.000 </div>
											</div>
											<div class="flex flex-direction-col w-50">
												<div class="caption-card-detail">Tanggal Bayar</div>
												<div class="content-card-detail">23 Jun 2022</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="flex flex-direction-col w-33">
								<div class="card-secondary flex flex-direction-col flex-gap-semi-small">
									<div class="w-100 flex flex-direction-col flex-gap-regular">
										<div class="flex flex-center-vertical flex-between-horizontal">
											<div class="title-secondary-card">SBUM</div>
										</div>
										<div class="flex flex-gap-regular w-100">
											<div class="flex flex-direction-col w-50">
												<div class="caption-card-detail">Nilai</div>
												<div class="content-card-detail">Rp. 4.900.000 </div>
											</div>
											<div class="flex flex-direction-col w-50">
												<div class="caption-card-detail">Tanggal Cair</div>
												<div class="content-card-detail">23 Jun 2022</div>
											</div>
										</div>
										<div class="flex flex-gap-regular w-100">
											<div class="flex flex-direction-col w-50">
												<div class="caption-card-detail hidden">a</div>
												<div class="content-card-detail hidden">a</div>
											</div>
											<div class="flex flex-direction-col w-50">
												<div class="caption-card-detail hidden">a</div>
												<div class="content-card-detail hidden">a</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="flex flex-direction-col w-33">
								<div class="card-secondary flex flex-direction-col flex-gap-semi-small">
									<div class="w-100 flex flex-direction-col flex-gap-regular">
										<div class="flex flex-center-vertical flex-between-horizontal">
											<div class="title-secondary-card">Jaminan Kelayakan Konstruksi</div>
										</div>
										<div class="flex flex-gap-regular w-100">
											<div class="flex flex-direction-col w-50">
												<div class="caption-card-detail">Nilai</div>
												<div class="content-card-detail">Rp. 4.900.000 </div>
											</div>
											<div class="flex flex-direction-col w-50">
												<div class="caption-card-detail">Diajukan</div>
												<div class="content-card-detail">23 Jun 2022</div>
											</div>
										</div>
										<div class="flex flex-gap-regular w-100">
											<div class="flex flex-direction-col w-50">
												<div class="caption-card-detail">Cair</div>
												<div class="content-card-detail">Rp. 4.900.000 </div>
											</div>
											<div class="flex flex-direction-col w-50">
												<div class="caption-card-detail">Tanggal Cair</div>
												<div class="content-card-detail">23 Jun 2022</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="flex w-100 flex-gap-regular">
							<div class="flex flex-direction-col w-50">
								<div class="card-secondary flex flex-direction-col flex-gap-semi-small">
									<div class="w-100 flex flex-direction-col flex-gap-regular">
										<div class="flex flex-center-vertical flex-between-horizontal">
											<div class="title-secondary-card">Sertifikat</div>
										</div>
										<div class="flex flex-gap-regular w-100">
											<div class="flex flex-direction-col w-25">
												<div class="caption-card-detail">All Nilai</div>
												<div class="content-card-detail">Rp. 4.900.000 </div>
											</div>
											<div class="flex flex-direction-col w-25">
												<div class="caption-card-detail">Pengajuan</div>
												<div class="content-card-detail">Rp. 4.900.000</div>
											</div>
											<div class="flex flex-direction-col w-25">
												<div class="caption-card-detail">Tanggal Cair</div>
												<div class="content-card-detail">02 Mar 2020 </div>
											</div>
										</div>
										<div class="flex w-100 flex-gap-regular">
											<div class="card-secondary flex flex-direction-col flex-gap-semi-small">
												<div class="w-100 flex flex-direction-col flex-gap-regular">
													<div class="flex flex-center-vertical flex-between-horizontal">
														<div class="title-secondary-card">Cair</div>
													</div>
													<div class="flex flex-gap-regular w-100">
														<div class="flex flex-direction-col w-50">
															<div class="caption-card-detail">Nominal Cair</div>
															<div class="content-card-detail">Rp. 4.900.000 </div>
														</div>
														<div class="flex flex-direction-col w-50">
															<div class="caption-card-detail">Cair dari Bank</div>
															<div class="content-card-detail">BANTIM</div>
														</div>
													</div>
												</div>
											</div>
											<div class="card-secondary flex flex-direction-col flex-gap-semi-small">
												<div class="w-100 flex flex-direction-col flex-gap-regular">
													<div class="flex flex-center-vertical flex-between-horizontal">
														<div class="title-secondary-card">Outstanding</div>
													</div>
													<div class="flex flex-gap-regular w-100">
														<div class="flex flex-direction-col w-50">
															<div class="caption-card-detail">Nominal Sisa</div>
															<div class="content-card-detail">Rp. 4.900.000 </div>
														</div>
														<div class="flex flex-direction-col w-50">
															<div class="caption-card-detail">Cair dari Bank</div>
															<div class="content-card-detail">BANTIM</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="flex flex-direction-col w-50">
								<div class="card-secondary flex flex-direction-col flex-gap-semi-small">
									<div class="w-100 flex flex-direction-col flex-gap-regular">
										<div class="flex flex-center-vertical flex-between-horizontal">
											<div class="title-secondary-card">IMB</div>
										</div>
										<div class="flex flex-gap-regular w-100">
											<div class="flex flex-direction-col w-25">
												<div class="caption-card-detail">All Nilai</div>
												<div class="content-card-detail">Rp. 4.900.000 </div>
											</div>
											<div class="flex flex-direction-col w-25">
												<div class="caption-card-detail">Pengajuan</div>
												<div class="content-card-detail">Rp. 4.900.000</div>
											</div>
											<div class="flex flex-direction-col w-25">
												<div class="caption-card-detail">Tanggal Cair</div>
												<div class="content-card-detail">02 Mar 2020 </div>
											</div>
										</div>
										<div class="flex w-100 flex-gap-regular">
											<div class="card-secondary flex flex-direction-col flex-gap-semi-small">
												<div class="w-100 flex flex-direction-col flex-gap-regular">
													<div class="flex flex-center-vertical flex-between-horizontal">
														<div class="title-secondary-card">Cair</div>
													</div>
													<div class="flex flex-gap-regular w-100">
														<div class="flex flex-direction-col w-50">
															<div class="caption-card-detail">Nominal Cair</div>
															<div class="content-card-detail">Rp. 4.900.000 </div>
														</div>
														<div class="flex flex-direction-col w-50">
															<div class="caption-card-detail">Cair dari Bank</div>
															<div class="content-card-detail">BANTIM</div>
														</div>
													</div>
												</div>
											</div>
											<div class="card-secondary flex flex-direction-col flex-gap-semi-small">
												<div class="w-100 flex flex-direction-col flex-gap-regular">
													<div class="flex flex-center-vertical flex-between-horizontal">
														<div class="title-secondary-card">Outstanding</div>
													</div>
													<div class="flex flex-gap-regular w-100">
														<div class="flex flex-direction-col w-50">
															<div class="caption-card-detail">Nominal Sisa</div>
															<div class="content-card-detail">Rp. 4.900.000 </div>
														</div>
														<div class="flex flex-direction-col w-50">
															<div class="caption-card-detail">Cair dari Bank</div>
															<div class="content-card-detail">BANTIM</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="flex w-100 flex-gap-regular">
							<div class="flex flex-direction-col w-50">
								<div class="card-secondary flex flex-direction-col flex-gap-semi-small">
									<div class="w-100 flex flex-direction-col flex-gap-regular">
										<div class="flex flex-center-vertical flex-between-horizontal">
											<div class="title-secondary-card">Listrik</div>
										</div>
										<div class="flex flex-gap-regular w-100">
											<div class="flex flex-direction-col w-25">
												<div class="caption-card-detail">All Nilai</div>
												<div class="content-card-detail">Rp. 4.900.000 </div>
											</div>
											<div class="flex flex-direction-col w-25">
												<div class="caption-card-detail">Pengajuan</div>
												<div class="content-card-detail">Rp. 4.900.000</div>
											</div>
											<div class="flex flex-direction-col w-25">
												<div class="caption-card-detail">Tanggal Cair</div>
												<div class="content-card-detail">02 Mar 2020 </div>
											</div>
										</div>
										<div class="flex w-100 flex-gap-regular">
											<div class="card-secondary flex flex-direction-col flex-gap-semi-small">
												<div class="w-100 flex flex-direction-col flex-gap-regular">
													<div class="flex flex-center-vertical flex-between-horizontal">
														<div class="title-secondary-card">Cair</div>
													</div>
													<div class="flex flex-gap-regular w-100">
														<div class="flex flex-direction-col w-50">
															<div class="caption-card-detail">Nominal Cair</div>
															<div class="content-card-detail">Rp. 4.900.000 </div>
														</div>
														<div class="flex flex-direction-col w-50">
															<div class="caption-card-detail">Cair dari Bank</div>
															<div class="content-card-detail">BANTIM</div>
														</div>
													</div>
												</div>
											</div>
											<div class="card-secondary flex flex-direction-col flex-gap-semi-small">
												<div class="w-100 flex flex-direction-col flex-gap-regular">
													<div class="flex flex-center-vertical flex-between-horizontal">
														<div class="title-secondary-card">Outstanding</div>
													</div>
													<div class="flex flex-gap-regular w-100">
														<div class="flex flex-direction-col w-50">
															<div class="caption-card-detail">Nominal Sisa</div>
															<div class="content-card-detail">Rp. 4.900.000 </div>
														</div>
														<div class="flex flex-direction-col w-50">
															<div class="caption-card-detail">Cair dari Bank</div>
															<div class="content-card-detail">BANTIM</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="flex flex-direction-col w-50">
								<div class="card-secondary flex flex-direction-col flex-gap-semi-small">
									<div class="w-100 flex flex-direction-col flex-gap-regular">
										<div class="flex flex-center-vertical flex-between-horizontal">
											<div class="title-secondary-card">Bestek</div>
										</div>
										<div class="flex flex-gap-regular w-100">
											<div class="flex flex-direction-col w-25">
												<div class="caption-card-detail">All Nilai</div>
												<div class="content-card-detail">Rp. 4.900.000 </div>
											</div>
											<div class="flex flex-direction-col w-25">
												<div class="caption-card-detail">Pengajuan</div>
												<div class="content-card-detail">Rp. 4.900.000</div>
											</div>
											<div class="flex flex-direction-col w-25">
												<div class="caption-card-detail">Tanggal Cair</div>
												<div class="content-card-detail">02 Mar 2020 </div>
											</div>
										</div>
										<div class="flex w-100 flex-gap-regular">
											<div class="card-secondary flex flex-direction-col flex-gap-semi-small">
												<div class="w-100 flex flex-direction-col flex-gap-regular">
													<div class="flex flex-center-vertical flex-between-horizontal">
														<div class="title-secondary-card">Cair</div>
													</div>
													<div class="flex flex-gap-regular w-100">
														<div class="flex flex-direction-col w-50">
															<div class="caption-card-detail">Nominal Cair</div>
															<div class="content-card-detail">Rp. 4.900.000 </div>
														</div>
														<div class="flex flex-direction-col w-50">
															<div class="caption-card-detail">Cair dari Bank</div>
															<div class="content-card-detail">BANTIM</div>
														</div>
													</div>
												</div>
											</div>
											<div class="card-secondary flex flex-direction-col flex-gap-semi-small">
												<div class="w-100 flex flex-direction-col flex-gap-regular">
													<div class="flex flex-center-vertical flex-between-horizontal">
														<div class="title-secondary-card">Outstanding</div>
													</div>
													<div class="flex flex-gap-regular w-100">
														<div class="flex flex-direction-col w-50">
															<div class="caption-card-detail">Nominal Sisa</div>
															<div class="content-card-detail">Rp. 4.900.000 </div>
														</div>
														<div class="flex flex-direction-col w-50">
															<div class="caption-card-detail">Cair dari Bank</div>
															<div class="content-card-detail">BANTIM</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="flex w-100 flex-gap-large">
					<div class="card w-100 flex flex-gap-semi-large flex-direction-col">
						<div class="w-100 flex flex-direction-col flex-gap-large">
							<div class="flex flex-gap-regular">
								<div class="w-100 flex flex-direction-col flex-gap-regular">
									<div class="flex flex-center-vertical flex-between-horizontal">
										<div class="secondary-title-card-detail">Progress oleh Teknis</div>
									</div>
									<div class="flex w-100">
										<div class="loading-bar w-100">
											<div class="loading-success flex flex-center-horizontal" style="width: 50%;">50%</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="flex w-100 flex-gap-large">
					<div class="card w-100 flex flex-gap-semi-large flex-direction-col">
						<div class="w-100 flex flex-direction-col flex-gap-large">
							<div class="flex flex-gap-regular">
								<div class="w-100 flex flex-direction-col flex-gap-regular">
									<div class="flex flex-center-vertical flex-between-horizontal">
										<div class="secondary-title-card-detail">Progress oleh Legal</div>
									</div>
									<div class="flex w-100">
										<div class="loading-bar w-100">
											<div class="loading-danger flex flex-center-horizontal" style="width: 16%;">16%</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="flex w-100 flex-gap-large">
					<div class="card w-100 flex flex-gap-semi-large flex-direction-col">
						<div class="w-100 flex flex-direction-col flex-gap-large">
							<div class="flex flex-gap-regular">
								<div class="w-100 flex flex-direction-col flex-gap-regular">
									<div class="flex flex-center-vertical flex-between-horizontal">
										<div class="secondary-title-card-detail">Progress oleh Bank</div>
									</div>
									<div class="flex w-40 flex-between-horizontal">
										<div class="flex flex-direction-col">
											<div class="caption-card-detail">Tanggal Mulai Proses</div>
											<div class="content-card-detail">26 Jun 2019</div>
										</div>
										<div class="flex flex-direction-col">
											<div class="caption-card-detail">Status Pengajuan</div>
											<div class="content-card-detail-success">Diterima</div>
										</div>
										<div class="flex flex-direction-col">
											<div class="caption-card-detail">Status Banding</div>
											<a href="#" class="no-decor link-detail">-</a>
										</div>
									</div>
									<div class="card-secondary flex flex-direction-col flex-gap-semi-small">
										<div class="flex flex-center-vertical flex-between-horizontal">
											<div class="secondary-title-card-detail">Progress oleh Marketing</div>
										</div>
										<div class="flex w-100">
											<div class="loading-bar w-100">
												<div class="loading-danger flex flex-center-horizontal" style="width: 16%;">16%</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="flex w-100 flex-gap-large">
					<div class="card w-100 flex flex-gap-semi-large flex-direction-col">
						<div class="w-100 flex flex-direction-col flex-gap-large">
							<div class="flex flex-gap-regular">
								<div class="w-100 flex flex-direction-col flex-gap-regular">
									<div class="flex flex-center-vertical flex-between-horizontal">
										<div class="secondary-title-card-detail">Keterangan</div>
									</div>
									<div class="flex w-100 flex-between-horizontal">
										<div class="flex flex-direction-col">
											<div class="caption-card-detail">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod rutrum arcu, et ultrices lorem malesuada eget. Etiam gravida augue in lorem facilisis, eget aliquet diam tristique. Sed pharetra venenatis justo et porttitor. Etiam nibh libero, eleifend non lectus sit amet, faucibus convallis dui. Integer consectetur consequat mauris dignissim dignissim. Fusce at maximus purus. Nunc gravida felis sit amet nunc luctus, in congue magna pulvinar. Duis non dui dignissim, facilisis elit feugiat, efficitur urna. Maecenas quis eleifend mauris, ut vulputate nisi. Etiam molestie odio quis porttitor consectetur.</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/if}
			</div>
		</div>
	</div>
</div>