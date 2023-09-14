<script type="text/javascript">
	import Sidebar from '../../../../../components/sidebar.svelte'
	import Navbar from '../../../../../components/navbar.svelte'
	import { onMount } from 'svelte';
	import {fly, scale} from 'svelte/transition'
	import { page } from '$app/stores'
	import ApiController from '../../../../../ApiController';

	export let data
	
	let idNup = data.params.slug
	let nup = null

	let getDetailNUP = () => {
		ApiController({
			method: "GET",
			endpoint: `nup/${idNup}`
		}).then(response => {
			nup = response.data.data
			console.log(nup)
		})
	}

	onMount(() => {
		getDetailNUP()
	})

</script>

<div id="after-login-layout">
	<Navbar/>
	<div class="flex">
		<Sidebar statusPointer="Nup" pagePointer="admin"/>
		<div class="w-80 content">
			<div class="flex flex-direction-col flex-gap-large" in:fly={{ y: -20, duration: 600 }}>
				<div class="flex flex-between-horizontal flex-center-vertical w-100">
					<div class="flex  flex-direction-col flex-between-horizontal flex-gap-semi-small w-100">
						<div class="title-content">Detail NUP</div>
						<div class="flex flex-gap-regular flex-center-vertical">
							<div class="text-breadcrumb" on:click={() => {
								history.back()
							}}>NUP</div>
							<img src="/images/icons/Arrow_Right.svg">
							<div class="text-breadcrumb-active">Detail NUP</div>
						</div>
					</div>
					<div class="flex flex-gap-regular">
						<a href="/super-admin/nup/edit-nup" class="no-decor"><button class="btn-fill-warning flex flex-center-vertical flex-gap-small"><img src="/images/icons/Edit_White.svg"> <span>Edit</span></button></a>
						<a href="/super-admin/nup/detail-nup" class="no-decor"><button class="btn-fill-danger flex flex-center-vertical flex-gap-small"><img src="/images/icons/Trash_White.svg"> <span>Hapus</span></button></a>
					</div>
				</div>

				{#if nup != null}
				<div class="card w-100 flex flex-gap-semi-large">
					<div class="w-40">
						<img class="img-detail w-100 h-100" src="/images/rumah.png">
					</div>
					<div class="w-60 flex flex-direction-col flex-gap-large">
						<div class="flex flex-gap-regular">
							<div class="w-50 flex flex-direction-col flex-gap-small">
								<div class="main-title-card-detail">{nup.perumahan.nama}</div>
								<div class="main-sub-title-card-detail">Nomor Urut Pemesan: {nup.id_nup}</div>
							</div>
							<div class="w-50 flex flex-gap-regular">
								<div class="{nup.status_ho == "pending" ? 'label-pending' : 'label-success'} flex flex-center-horizontal flex-gap-small">
									<span>{nup.status_ho[0].toUpperCase() + nup.status_ho.slice(1, nup.status_ho.length)} HO</span>
									<img src="/images/icons/{nup.status_ho == 'pending' ? 'Info.svg' : 'Check_White.svg'}">
								</div>
								<div class="{nup.status_finance == "pending" ? 'label-pending' : 'label-success'} flex flex-center-horizontal flex-gap-small">
									<span>Approved Finance</span>
									<img src="/images/icons/{nup.status_finance == 'pending' ? 'Info.svg' : 'Check_White.svg'}">
								</div>
							</div>
						</div>
						<div class="flex flex-gap-regular">
							<div class="w-50 flex flex-direction-col flex-gap-regular">
								<div class="secondary-title-card-detail">Pengajuan Unit</div>
								<div class="flex flex-direction-col">
									<div class="caption-card-detail">Tipe Pengajuan (KPR/KPA)</div>
									<div class="content-card-detail">{nup.tipe_pengajuan}</div>
								</div>
								<div class="flex flex-direction-col">
									<div class="caption-card-detail">Tanggal Submit</div>
									<div class="content-card-detail">{nup.pilihan_unit[0].tanggal_submit}</div>
								</div>
								<div class="flex w-100">
									<div class="flex flex-direction-col w-50">
										<div class="caption-card-detail">Harga Unit</div>
										<div class="content-card-detail">Rp. {nup.pilihan_unit[0].harga_unit}</div>
									</div>
									<div class="flex flex-direction-col">
										<div class="caption-card-detail">Versi Price List</div>
										<div class="content-card-detail">{nup.versi_pricelist.versi_pricelist}</div>
									</div>
								</div>
								<div class="flex flex-direction-col flex-gap-semi-small">
									<div class="caption-card-detail">Pilihan Unit</div>
									<div class="data-perum-detail flex flex-direction-col flex-gap-regular">
										<div class="content-card-detail">Alternatif 1</div>
										<div class="flex flex-direction-col">
											<div class="caption-card-detail">Jenis Bangunan</div>
											<div class="content-card-detail">{nup.pilihan_unit[0].jenis_bangunan}</div>
										</div>
										<div class="flex w-100">
											<div class="flex flex-direction-col w-50">
												<div class="caption-card-detail">Blok</div>
												<div class="content-card-detail">{nup.pilihan_unit[0].tower_blok}</div>
											</div>
											<div class="flex flex-direction-col">
												<div class="caption-card-detail">Nomor</div>
												<div class="content-card-detail">{nup.pilihan_unit[0].nomor}</div>
											</div>
										</div>
										<div class="flex w-100">
											<div class="flex flex-direction-col w-50">
												<div class="caption-card-detail">Lantai</div>
												<div class="content-card-detail">{nup.pilihan_unit[0].lantai} Lantai</div>
											</div>
											<div class="flex flex-direction-col">
												<div class="caption-card-detail">Tipe</div>
												<div class="content-card-detail">{nup.pilihan_unit[0].tipe_perumahan}</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="w-50 flex flex-direction-col flex-gap-regular">
								<div class="secondary-title-card-detail">Marketing</div>
								<div class="flex flex-direction-col">
									<div class="caption-card-detail">Lead Marketing</div>
									<div class="content-card-detail">{nup.lead_marketing.nama}</div>
								</div>
								<div class="flex flex-direction-col">
									<div class="caption-card-detail">Marketing</div>
									<div class="content-card-detail">{nup.marketing.nama}</div>
								</div>
								<div class="card-secondary flex flex-direction-col flex-gap-semi-small">
									<div class="caption-card-detail">Dokumen Pendukung</div>
									<div class="flex flex-direction-col">
										<div class="caption-card-detail">Berkas NUP</div>
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
									<div class="secondary-title-card-detail">Pemesan</div>
									<div class="flex w-100">
										<div class="flex flex-direction-col w-50">
											<div class="caption-card-detail">Nama Lengkap</div>
											<div class="content-card-detail">{nup.client.nama_client}</div>
										</div>
										<div class="flex flex-direction-col w-50">
											<div class="caption-card-detail">Nomor KTP</div>
											<div class="content-card-detail">{nup.client.no_ktp}</div>
										</div>
									</div>
									<div class="flex w-100">
										<div class="flex flex-direction-col w-50">
											<div class="caption-card-detail">Jenis Kelamin</div>
											<div class="content-card-detail">{nup.client.jenis_kelamin}</div>
										</div>
										<div class="flex flex-direction-col w-50">
											<div class="caption-card-detail">Nomor Telepon</div>
											<div class="content-card-detail">{nup.client.no_hp}</div>
										</div>
									</div>
									<div class="flex w-100">
										<div class="flex flex-direction-col w-50">
											<div class="caption-card-detail">Status Nikah</div>
											<div class="content-card-detail">{nup.client.status_menikah == true ? 'Sudah' : 'Belum'} Menikah</div>
										</div>
										<div class="flex flex-direction-col w-50">
											<div class="caption-card-detail">Alamat Email</div>
											<div class="content-card-detail">{nup.client.email}</div>
										</div>
									</div>
									<div class="flex w-100">
										<div class="flex flex-direction-col w-40">
											<div class="caption-card-detail">Alamat Lengkap</div>
											<div class="content-card-detail">{nup.client.alamat}</div>
										</div>
										<div class="w-10"></div>
										<div class="flex flex-direction-col w-50 flex-gap-regular">
											<div class="flex flex-direction-col">
												<div class="caption-card-detail">Nomor NPWP</div>
												<div class="content-card-detail">{nup.client.npwp}</div>
											</div>
											<div class="flex flex-direction-col">
												<div class="caption-card-detail">Pekerjaan</div>
												<div class="content-card-detail">{nup.client.pekerjaan}</div>
											</div>
											<div class="flex flex-direction-col">
												<div class="caption-card-detail">Koordinat Lokasi Usaha</div>
												<div class="content-card-detail">{nup.client.koordinat_usaha}</div>
											</div>
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
										<div class="caption-card-detail">Fotokopi KTP</div>	
										<a href="#" class="no-decor link-detail">lihat</a>
									</div>
								</div>
								<div class="w-50">
									<div class="flex flex-direction-col">
										<div class="caption-card-detail">Fotokopi KK</div>	
										<a href="#" class="no-decor link-detail">lihat</a>
									</div>
								</div>
							</div>
							<div class="flex">
								<div class="w-50">
									<div class="flex flex-direction-col">
										<div class="caption-card-detail">Fotokopi NPWP</div>	
										<a href="#" class="no-decor link-detail">lihat</a>
									</div>
								</div>
								<div class="w-50">
									<div class="flex flex-direction-col">
										<div class="caption-card-detail">Pas Foto</div>	
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
										<div class="secondary-title-card-detail">Pasangan</div>
										<div class="flex w-100">
											<div class="flex flex-direction-col w-50">
												<div class="caption-card-detail">Nama Lengkap</div>
												<div class="content-card-detail">{nup.client.nama_pasangan}</div>
											</div>
											<div class="flex flex-direction-col w-50">
												<div class="caption-card-detail">Nomor KTP</div>
												<div class="content-card-detail">{nup.client.no_ktp_pasangan}</div>
											</div>
										</div>
										<div class="flex w-100">
											<div class="flex flex-direction-col w-50">
												<div class="caption-card-detail">Jenis Kelamin</div>
												<div class="content-card-detail">{nup.client.jenis_kelamin == 'Laki-laki' ? 'Perempuan' : 'Laki-laki'}</div>
											</div>
											<div class="flex flex-direction-col w-50">
												<div class="caption-card-detail">Nomor Telepon</div>
												<div class="content-card-detail">1234XXXXXXXXXXXX</div>
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
											<div class="caption-card-detail">Fotokopi KTP</div>	
											<a href="#" class="no-decor link-detail">lihat</a>
										</div>
									</div>
									<div class="w-50">
										<div class="flex flex-direction-col">
											<div class="caption-card-detail">Pas Foto</div>	
											<a href="#" class="no-decor link-detail">lihat</a>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="card w-100 flex flex-gap-semi-large flex-direction-col h-100 flex-center-horizontal">
							<div class="w-100 flex flex-direction-col flex-gap-large">
								<div class="flex flex-gap-regular">
									<div class="w-100 flex flex-direction-col flex-gap-regular">
										<div class="secondary-title-card-detail">BI Checking</div>
										<div class="flex w-100">
											<div class="flex flex-direction-col w-50">
												<div class="caption-card-detail">Status BI Checking</div>
												<div class="content-card-detail">{nup.bi_checking.status}</div>
											</div>
											<div class="flex flex-direction-col w-50">
												<div class="caption-card-detail">Hasil BI Checking</div>
												<div class="content-card-detail">{nup.bi_checking.hasil_}</div>
											</div>
										</div>
										<div class="flex w-100">
											<div class="flex flex-direction-col w-50">
												<div class="caption-card-detail">Tanggal Pengajuan</div>
												<div class="content-card-detail">{nup.bi_checking.tanggal_pengajuan.split(" ")[0]}</div>
											</div>
											<div class="flex flex-direction-col w-50">
												<div class="caption-card-detail">Hasil BI Checking Pasangan</div>
												<div class="content-card-detail">{nup.bi_checking.hasil_pasangan}</div>
											</div>
										</div>
										<div class="flex w-100">
											<div class="flex flex-direction-col w-50">
												<div class="caption-card-detail">Tanggal Hasil BI Checking</div>
												<div class="content-card-detail">{nup.bi_checking.tanggal_hasil.split(" ")[0]}</div>
											</div>
											<div class="flex flex-direction-col w-50">
												<div class="caption-card-detail">Nama Referensi</div>
												<div class="content-card-detail">{nup.bi_checking.nama_referensi}</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="flex w-100 flex-gap-large">
					<div class="w-50 padding-item-solo">
						<div class="card flex flex-gap-semi-large flex-direction-col">
							<div class="w-100 flex flex-direction-col flex-gap-large">
								<div class="flex flex-gap-regular">
									<div class="w-100 flex flex-direction-col flex-gap-regular">
										<div class="secondary-title-card-detail">Pembayaran Booking Fee</div>
										<div class="flex w-100">
											<div class="flex flex-direction-col w-50">
												<div class="caption-card-detail">Nominal Booking Fee</div>
												<div class="content-card-detail">Rp. {nup.pembayaran.booking_fee}</div>
											</div>
											<div class="flex flex-direction-col w-50">
												<div class="caption-card-detail">Metode Pembayaran</div>
												<div class="content-card-detail">{nup.pembayaran.metode_pembayaran}</div>
											</div>
										</div>
										<div class="flex w-100">
											<div class="flex flex-direction-col w-50">
												<div class="caption-card-detail">Nama Bank</div>
												<div class="content-card-detail">{nup.pembayaran.bank}</div>
											</div>
											<div class="flex flex-direction-col w-50">
												<div class="caption-card-detail">Nomor Rekening</div>
												<div class="content-card-detail">{nup.pembayaran.no_rek}</div>
											</div>
										</div>
										<div class="flex w-100">
											<div class="flex flex-direction-col w-50">
												<div class="caption-card-detail">Tanggal Pembayaran</div>
												<div class="content-card-detail">{nup.pembayaran.tanggal_pembayaran}</div>
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
					</div>
				</div>
				<div class="flex w-100 flex-center-horizontal">
					<button class="btn-transparent flex flex-center-vertical flex-gap-small"><span>Lihat Detail Data Unit</span></button>
					<button class="btn-transparent flex flex-center-vertical flex-gap-small"><span>Lihat Detail Data Pemesan</span></button>
				</div>
				{/if}
			</div>
		</div>
	</div>
</div>