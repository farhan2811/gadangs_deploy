<script type="text/javascript">
	import Sidebar from '../../../../components/sidebar.svelte'
	import Navbar from '../../../../components/navbar.svelte'
	import { onMount } from 'svelte';
	import {fly, scale} from 'svelte/transition'
	
</script>

<div id="after-login-layout">
	<Navbar/>
	<div class="flex">
		<Sidebar statusPointer="Pemberkasan" pagePointer="admin"/>
		<div class="w-80 content">
			<div class="flex flex-direction-col flex-gap-large" in:fly={{ y: -20, duration: 600 }}>
				<div class="flex flex-between-horizontal flex-center-vertical w-100">
					<div class="flex  flex-direction-col flex-between-horizontal flex-gap-semi-small">
						<div class="title-content">Detail Pemberkasan</div>
						<div class="flex flex-gap-regular flex-center-vertical">
							<div class="text-breadcrumb">Pemberkasan</div>
							<img src="/images/icons/Arrow_Right.svg">
							<div class="text-breadcrumb-active">Detail</div>
						</div>
					</div>
					<div class="flex flex-gap-regular">
						<button class="btn-outline flex flex-center-vertical flex-gap-small"><span>Download PDF</span> <img src="/images/icons/File_Download.svg"></button>
						<a href="/super-admin/pemberkasan/edit-pemberkasan" class="no-decor"><button class="btn-fill-warning flex flex-center-vertical flex-gap-small"><img src="/images/icons/Edit_White.svg"> <span>Edit</span></button></a>
					</div>
				</div>
				<div class="card w-100 flex flex-gap-semi-large">
					<div class="w-40">
						<img class="img-detail w-100 h-100" src="/images/rumah.png">
					</div>
					<div class="w-60 flex flex-direction-col flex-gap-large">
						<div class="flex flex-gap-regular">
							<div class="w-50 flex flex-direction-col flex-gap-small">
								<div class="main-title-card-detail">Gria Esma Cicalengka</div>
								<div class="main-sub-title-card-detail">Nomor Urut Pemesan: 70081</div>
							</div>
							<div class="w-50 flex flex-gap-regular">
								<div class="label-success flex flex-center-horizontal flex-gap-small">
									<span>Approved HO</span>
									<img src="/images/icons/Check_White.svg">
								</div>
								<div class="label-success flex flex-center-horizontal flex-gap-small">
									<span>Approved Finance</span>
									<img src="/images/icons/Check_White.svg">
								</div>
							</div>
						</div>
						<div class="flex flex-gap-regular">
							<div class="w-50 flex flex-direction-col flex-gap-regular">
								<div class="secondary-title-card-detail">Pengajuan Unit</div>
								<div class="flex flex-direction-col">
									<div class="caption-card-detail">Tipe Pengajuan (KPR/KPA)</div>
									<div class="content-card-detail">Subsidi</div>
								</div>
								<div class="flex flex-direction-col">
									<div class="caption-card-detail">Tanggal Submit</div>
									<div class="content-card-detail">25 April 2018</div>
								</div>
								<div class="flex w-100">
									<div class="flex flex-direction-col w-50">
										<div class="caption-card-detail">Harga Unit</div>
										<div class="content-card-detail">Rp. 500.000.000</div>
									</div>
									<div class="flex flex-direction-col">
										<div class="caption-card-detail">Versi Price List</div>
										<div class="content-card-detail">V.2018.04.14</div>
									</div>
								</div>
								<div class="flex flex-direction-col flex-gap-semi-small">
									<div class="caption-card-detail">Pilihan Unit</div>
									<div class="data-perum-detail flex flex-direction-col flex-gap-regular">
										<div class="content-card-detail">Alternatif 1</div>
										<div class="flex flex-direction-col">
											<div class="caption-card-detail">Jenis Bangunan</div>
											<div class="content-card-detail">Perumahan</div>
										</div>
										<div class="flex w-100">
											<div class="flex flex-direction-col w-50">
												<div class="caption-card-detail">Blok</div>
												<div class="content-card-detail">A2</div>
											</div>
											<div class="flex flex-direction-col">
												<div class="caption-card-detail">Nomor</div>
												<div class="content-card-detail">02</div>
											</div>
										</div>
										<div class="flex w-100">
											<div class="flex flex-direction-col w-50">
												<div class="caption-card-detail">Lantai</div>
												<div class="content-card-detail">1 Lantai</div>
											</div>
											<div class="flex flex-direction-col">
												<div class="caption-card-detail">Tipe</div>
												<div class="content-card-detail">35/66 m²</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="w-50 flex flex-direction-col flex-gap-regular">
								<div class="secondary-title-card-detail">Marketing</div>
								<div class="flex flex-direction-col">
									<div class="caption-card-detail">Lead Marketing</div>
									<div class="content-card-detail">Zaenal Muhtarom</div>
								</div>
								<div class="flex flex-direction-col">
									<div class="caption-card-detail">Marketing</div>
									<div class="content-card-detail">Zaenal Muhtarom</div>
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
					<div class="card w-100 flex flex-gap-semi-large flex-direction-col">
						<div class="w-100 flex flex-direction-col flex-gap-large">
							<div class="flex flex-gap-regular">
								<div class="w-100 flex flex-direction-col flex-gap-regular">
									<div class="flex flex-center-vertical flex-between-horizontal">
										<div class="secondary-title-card-detail">Informasi Konfirmasi Pesanan</div>
										<div class="flex flex-gap-regular">
											<button class="btn-outline flex flex-center-vertical flex-gap-small"><span>Atur</span></button>
											<button class="btn-fill flex flex-center-vertical flex-gap-small"><span>Download</span></button>
										</div>
									</div>
									<div class="flex w-100">
										<div class="flex flex-direction-col w-15">
											<div class="caption-card-detail">Nomor NUP</div>
											<div class="content-card-detail">70081</div>
										</div>
										<div class="flex flex-direction-col w-20">
											<div class="caption-card-detail">Tanggal NUP / Booking</div>
											<div class="content-card-detail">2 Jul 2020</div>
										</div>
										<div class="flex flex-direction-col w-20">
											<div class="caption-card-detail">Tanggal Pemesanan Unit</div>
											<div class="content-card-detail">2 Jul 2020</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="flex flex-gap-regular">
							<div class="card-secondary flex flex-direction-col flex-gap-semi-small w-100">
								<div class="caption-card-detail">Informasi Pemesanan</div>
								<div class="flex">
									<div class="w-50">
										<div class="flex flex-direction-col">
											<div class="caption-card-detail">Nama Lengkap Pemesan</div>	
											<div class="content-card-detail">Yogi Pasha</div>
										</div>
									</div>
								</div>
								<div class="flex">
									<div class="w-50">
										<div class="flex flex-direction-col">
											<div class="caption-card-detail">No. Handphone</div>	
											<div class="content-card-detail">0819XXXXXXXX</div>
										</div>
									</div>
									<div class="w-50">
										<div class="flex flex-direction-col">
											<div class="caption-card-detail">Email</div>	
											<div class="content-card-detail">yogi.pasha@test.com</div>
										</div>
									</div>
								</div>
							</div>
							<div class="card-secondary flex flex-direction-col flex-gap-semi-small w-100">
								<div class="caption-card-detail">Informasi Marketing</div>
								<div class="flex">
									<div class="w-50">
										<div class="flex flex-direction-col">
											<div class="caption-card-detail">Head Marketing</div>	
											<div class="content-card-detail">Zaenal Muhtarom</div>
										</div>
									</div>
									<div class="w-50">
										<div class="flex flex-direction-col">
											<div class="caption-card-detail">Marketing</div>	
											<div class="content-card-detail">Zaenal Muhtarom</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="card-secondary flex flex-direction-col flex-gap-semi-small">
							<div class="caption-card-detail">Unit Pesanan</div>
							<div class="flex">
								<div class="w-20">
									<div class="flex flex-direction-col">
										<div class="caption-card-detail">Blok Rumah</div>	
										<div class="content-card-detail">A2</div>
									</div>
								</div>
								<div class="w-20">
									<div class="flex flex-direction-col">
										<div class="caption-card-detail">Nomor Rumah</div>	
										<div class="content-card-detail">19</div>
									</div>
								</div>
								<div class="w-20">
									<div class="flex flex-direction-col">
										<div class="caption-card-detail">Luas Bangunan</div>	
										<div class="content-card-detail">35</div>
									</div>
								</div>
								<div class="w-20">
									<div class="flex flex-direction-col">
										<div class="caption-card-detail">Luas Tanah</div>	
										<div class="content-card-detail">66</div>
									</div>
								</div>
								<div class="w-20">
									<div class="flex flex-direction-col">
										<div class="caption-card-detail">Tipe</div>	
										<div class="content-card-detail">35/66</div>
									</div>
								</div>
							</div>
						</div>
						<div class="card-secondary flex flex-direction-col flex-gap-semi-small">
							<div class="caption-card-detail">Harga</div>
							<div class="flex">
								<div class="w-20">
									<div class="flex flex-direction-col">
										<div class="caption-card-detail">Cara Bayar</div>	
										<div class="content-card-detail">KPR Subsidi</div>
									</div>
								</div>
							</div>
							<div class="flex">
								<div class="w-20">
									<div class="flex flex-direction-col">
										<div class="caption-card-detail">Versi Pricelist</div>	
										<div class="content-card-detail">V.2020.01.01</div>
									</div>
								</div>
								<div class="w-20">
									<div class="flex flex-direction-col">
										<div class="caption-card-detail">Harga Jual</div>	
										<div class="content-card-detail">Rp. 150.500.000</div>
									</div>
								</div>
								<div class="w-20">
									<div class="flex flex-direction-col">
										<div class="caption-card-detail">Discount</div>	
										<div class="content-card-detail">-</div>
									</div>
								</div>
								<div class="w-20">
									<div class="flex flex-direction-col">
										<div class="caption-card-detail">PPN (11%)</div>	
										<div class="content-card-detail">-</div>
									</div>
								</div>
								<div class="w-20">
									<div class="flex flex-direction-col pl-pemberkasan">
										<div class="caption-card-detail">Total Harga Setelah PPN</div>	
										<div class="content-card-detail">Rp. 150.500.000</div>
									</div>
								</div>
							</div>
							<div class="flex">
								<div class="w-20">
									<div class="flex flex-direction-col">
										<div class="caption-card-detail">Booking Fee</div>	
										<div class="content-card-detail">Rp. 1.000.000</div>
									</div>
								</div>
								<div class="w-20">
									<div class="flex flex-direction-col">
										<div class="caption-card-detail">Jatuh Tempo Booking Fee</div>	
										<div class="content-card-detail">30 Juni 2020</div>
									</div>
								</div>
								<div class="w-20">
									<div class="flex flex-direction-col">
										<div class="caption-card-detail">Down Payment (10%)</div>	
										<div class="content-card-detail">-</div>
									</div>
								</div>
								<div class="w-20">
									<div class="flex flex-direction-col">
										<div class="caption-card-detail">Jatuh Tempo Down Payment</div>	
										<div class="content-card-detail">-</div>
									</div>
								</div>
							</div>
							<div class="flex ">
								<div class="w-20">
									<div class="flex flex-direction-col">
										<div class="caption-card-detail">SP3K Disetujui Oleh</div>	
										<div class="content-card-detail">Bank BTN</div>
									</div>
								</div>
								<div class="w-20">
									<div class="flex flex-direction-col">
										<div class="caption-card-detail">Tanggal Jatuh Tempo</div>	
										<div class="content-card-detail">Keputusan Bank</div>
									</div>
								</div>
								<div class="w-20">
									<div class="flex flex-direction-col">
										<div class="caption-card-detail">Nominal Disetujui Bank</div>	
										<div class="content-card-detail">Rp. 150.500.000</div>
									</div>
								</div>
								<div class="w-20">
									<div class="flex flex-direction-col">
										<div class="caption-card-detail">Maks. Kekurangan Plafond KPR</div>	
										<div class="content-card-detail">Tergantung Plafond SP3k</div>
									</div>
								</div>
								<div class="w-20">
									<div class="pl-pemberkasan flex flex-direction-col">
										<div class="caption-card-detail">Tanggal Jatuh Tempo</div>	
										<div class="content-card-detail">7 Hari sejak SP3k</div>
									</div>
								</div>
							</div>
							<div class="flex">
								<div class="w-20">
									<div class="flex flex-direction-col">
										<div class="caption-card-detail">Maks. Biaya Notaris (1x)</div>	
										<div class="content-card-detail">Rp. 9.800.000</div>
									</div>
								</div>
								<div class="w-20">
									<div class="flex flex-direction-col">
										<div class="caption-card-detail">Tanggal Jatuh Tempo</div>	
										<div class="content-card-detail">-</div>
									</div>
								</div>
								<div class="w-20">
									<div class="flex flex-direction-col">
										<div class="caption-card-detail">Maks. Pelunasan Akad KPR</div>	
										<div class="content-card-detail">Rp. 150.500.000</div>
									</div>
								</div>
								<div class="w-20">
									<div class="flex flex-direction-col">
										<div class="caption-card-detail">Tanggal Jatuh Tempo</div>	
										<div class="content-card-detail">-</div>
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
										<div class="secondary-title-card-detail">Berkas-Berkas</div>
										<button class="btn-outline flex flex-center-vertical flex-gap-small"><span>Atur</span></button>
									</div>
									<div class="flex w-100">
										<div class="flex flex-direction-col w-15">
											<div class="caption-card-detail">Pengajuan Ke</div>
											<div class="content-card-detail">Bank</div>
										</div>
										<div class="flex flex-direction-col w-10">
											<div class="caption-card-detail">Kredit</div>
											<div class="content-card-detail-success">Ya</div>
										</div>
										<div class="flex flex-direction-col w-10">
											<div class="caption-card-detail">Proses Kredit</div>
											<a href="#" class="no-decor link-detail">lihat</a>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="card-secondary flex flex-direction-col flex-gap-semi-small">
							<div class="caption-card-detail">Dokumen Pendukung</div>
							<div class="flex">
								<div class="w-25">
									<div class="flex flex-direction-col">
										<div class="caption-card-detail">Slip Gaji</div>	
										<a href="#" class="no-decor link-detail">lihat</a>
									</div>
								</div>
								<div class="w-25">
									<div class="flex flex-direction-col">
										<div class="caption-card-detail">Rekening Koran 3 Bulan</div>	
										<a href="#" class="no-decor link-detail">lihat</a>
									</div>
								</div>
								<div class="w-25">
									<div class="flex flex-direction-col">
										<div class="caption-card-detail">Form SBUM</div>	
										<a href="#" class="no-decor link-detail">lihat</a>
									</div>
								</div>
								<div class="w-25">
									<div class="flex flex-direction-col">
										<div class="caption-card-detail">Surat Nikah</div>	
										<a href="#" class="no-decor link-detail">lihat</a>
									</div>
								</div>
							</div>
							<div class="flex">
								<div class="w-25">
									<div class="flex flex-direction-col">
										<div class="caption-card-detail">Aplikasi Kredit</div>	
										<a href="#" class="no-decor link-detail">lihat</a>
									</div>
								</div>
								<div class="w-25">
									<div class="flex flex-direction-col">
										<div class="caption-card-detail">SK Masih Bekerja</div>	
										<a href="#" class="no-decor link-detail">lihat</a>
									</div>
								</div>
								<div class="w-25">
									<div class="flex flex-direction-col">
										<div class="caption-card-detail">Fotokopi Kartu Pegawai</div>	
										<a href="#" class="no-decor link-detail">lihat</a>
									</div>
								</div>
								<div class="w-25">
									<div class="flex flex-direction-col">
										<div class="caption-card-detail">SK Usaha dari Desa</div>	
										<a href="#" class="no-decor link-detail">lihat</a>
									</div>
								</div>
							</div>
							<div class="flex">
								<div class="w-25">
									<div class="flex flex-direction-col">
										<div class="caption-card-detail">SK Belum Memiliki Rumah</div>	
										<a href="#" class="no-decor link-detail">lihat</a>
									</div>
								</div>
								<div class="w-25">
									<div class="flex flex-direction-col">
										<div class="caption-card-detail">SK Batasan Penghasilan Sekeluarga</div>	
										<a href="#" class="no-decor link-detail">lihat</a>
									</div>
								</div>
								<div class="w-25">
									<div class="flex flex-direction-col">
										<div class="caption-card-detail">Fotokopi NIB Perusahaan Berlaku Efektif</div>	
										<a href="#" class="no-decor link-detail">lihat</a>
									</div>
								</div>
								<div class="w-25">
									<div class="flex flex-direction-col">
										<div class="caption-card-detail">Koordinat Lokasi Usaha (Decimal Degreee)</div>	
										<a href="#" class="no-decor link-detail">lihat</a>
									</div>
								</div>
							</div>
							<div class="flex">
								<div class="w-25">
									<div class="flex flex-direction-col">
										<div class="caption-card-detail">SK Pengangkatan Kerja</div>	
										<a href="#" class="no-decor link-detail">lihat</a>
									</div>
								</div>
								<div class="w-25">
									<div class="flex flex-direction-col">
										<div class="caption-card-detail">Fotokopi SPT PPh 21</div>	
										<a href="#" class="no-decor link-detail">lihat</a>
									</div>
								</div>
								<div class="w-25">
									<div class="flex flex-direction-col">
										<div class="caption-card-detail">Laporan Keuangan</div>	
										<a href="#" class="no-decor link-detail">lihat</a>
									</div>
								</div>
								<div class="w-25">
									<div class="flex flex-direction-col">
										<div class="caption-card-detail">Kartu BPJS Ketenaga Kerjaan</div>	
										<a href="#" class="no-decor link-detail">lihat</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="flex w-100 flex-gap-regular">
					<div class="w-50 padding-item-solo">
						<div class="card flex flex-gap-semi-large flex-direction-col">
							<div class="w-100 flex flex-direction-col flex-gap-large">
								<div class="flex flex-gap-regular">
									<div class="w-100 flex flex-direction-col flex-gap-regular">
										<div class="flex flex-center-vertical flex-between-horizontal">
											<div class="secondary-title-card-detail">SKPUR</div>
											<a href="/super-admin/pemberkasan/detail-pemberkasan/atur-skpur" class="no-decor"><button class="btn-outline flex flex-center-vertical flex-gap-small"><span>Atur</span></button></a>
										</div>
										<div class="flex w-100">
											<div class="flex flex-direction-col w-50">
												<div class="caption-card-detail">Nomor Surat</div>
												<div class="content-card-detail">xx.xx.xx-xxxx/xx</div>
											</div>
											<div class="flex flex-direction-col w-50">
												<div class="caption-card-detail">Tanggal Surat</div>
												<div class="content-card-detail">17 Mar 2023</div>
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
											<div class="caption-card-detail">Dokumen SKPUR</div>	
											<a href="#" class="no-decor link-detail">lihat</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="w-50 padding-item-solo">
						<div class="card flex flex-gap-semi-large flex-direction-col">
							<div class="w-100 flex flex-direction-col flex-gap-large">
								<div class="flex flex-gap-regular">
									<div class="w-100 flex flex-direction-col flex-gap-regular">
										<div class="flex flex-center-vertical flex-between-horizontal">
											<div class="secondary-title-card-detail">SP3UR</div>
											<a href="/super-admin/pemberkasan/detail-pemberkasan/atur-sp3ur" class="no-decor"><button class="btn-outline flex flex-center-vertical flex-gap-small"><span>Atur</span></button></a>
										</div>
										<div class="flex w-100">
											<div class="flex flex-direction-col w-50">
												<div class="caption-card-detail">Nomor Surat</div>
												<div class="content-card-detail">xx.xx.xx-xxxx/xx</div>
											</div>
											<div class="flex flex-direction-col w-50">
												<div class="caption-card-detail">Tanggal Surat</div>
												<div class="content-card-detail">17 Mar 2023</div>
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
											<div class="caption-card-detail">Dokumen SP3UR</div>	
											<a href="#" class="no-decor link-detail">lihat</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="flex w-100 flex-gap-regular">
					<div class="w-50 padding-item-solo">
						<div class="card flex flex-gap-semi-large flex-direction-col">
							<div class="w-100 flex flex-direction-col flex-gap-large">
								<div class="flex flex-gap-regular">
									<div class="w-100 flex flex-direction-col flex-gap-regular">
										<div class="secondary-title-card-detail">Pembayaran Down Payment</div>
										<div class="flex w-100">
											<div class="flex flex-direction-col w-50">
												<div class="caption-card-detail">Nominal Down Payment</div>
												<div class="content-card-detail">Rp. 1.000.000</div>
											</div>
											<div class="flex flex-direction-col w-50">
												<div class="caption-card-detail">Metode Pembayaran</div>
												<div class="content-card-detail">Transfer</div>
											</div>
										</div>
										<div class="flex w-100">
											<div class="flex flex-direction-col w-50">
												<div class="caption-card-detail">Nama Bank</div>
												<div class="content-card-detail">Bank Mandiri</div>
											</div>
											<div class="flex flex-direction-col w-50">
												<div class="caption-card-detail">Nomor Rekening</div>
												<div class="content-card-detail">XXXXXXXXXXXXX</div>
											</div>
										</div>
										<div class="flex w-100">
											<div class="flex flex-direction-col w-50">
												<div class="caption-card-detail">Tanggal Pembayaran</div>
												<div class="content-card-detail">19 April 2018</div>
											</div>
											<div class="flex flex-direction-col w-50">
												<div class="caption-card-detail">Status Pembayaran</div>
												<div class="content-card-detail-pending">Pending</div>
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
			</div>
		</div>
	</div>
</div>