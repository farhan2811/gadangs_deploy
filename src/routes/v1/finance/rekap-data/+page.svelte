<script type="text/javascript">
	import Sidebar from '../../../components/sidebar.svelte'
	import Navbar from '../../../components/navbar.svelte'
	import { onMount } from 'svelte';
	import {fly, scale} from 'svelte/transition'
	
</script>

<div id="after-login-layout">
	<Navbar/>
	<div class="flex">
		<Sidebar statusPointer="Rekap" pagePointer="ho"/>
		<div class="w-80 content">
			<div class="flex flex-direction-col flex-gap-large" in:fly={{ y: -20, duration: 600 }}>
				<div class="flex flex-between-horizontal flex-center-vertical w-100">
					<div class="title-content">Rekap Data</div>
					<div class="flex flex-gap-regular">
						<button class="btn-outline flex flex-center-vertical flex-gap-small"><span>Download Rekap Konsumen</span> <img src="/images/icons/File_Download.svg"></button>
					</div>
				</div>
				<div class="flex flex-direction-col flex-gap-regular">
					<div class="flex flex-direction-col flex-gap-small">
						<div class="flex flex-gap-regular">
							<span class="active-notif-button">Finansial</span>
							<span class="unactive-notif-button">Konsumen</span>
							<span class="unactive-notif-button">Head Finance</span>
						</div>
					</div>
					<div class="flex">
						<select class="select-col-2 w-25">
							<option disabled selected>Semua Perum</option>
							<option>Epicentrum Sepatan</option>
							<option>Serpong</option>
						</select>
					</div>
					<div class="flex flex-gap-semi-large w-100">
						<select class="select-col-3 w-15">
							<option>2023</option>
							<option>Serpong</option>
						</select>
						<input type="text" placeholder="Cari NUP" class="input-col-2 w-20">
						<input type="text" placeholder="Cari Lead Marketing" class="input-col-2 w-20">
						<input type="text" placeholder="Cari Marketing" class="input-col-2 w-20">
					</div>
					<div class="scroll-x flex flex-direction-col flex-gap-regular">
						<div class="card-head w-content-4 height-fit">
							<div class="flex">
								<div class="flex flex-gap-small flex-center-vertical w-30 border-separate">
									<div class="text-drop-card">NUP</div>
									<img src="/images/icons/Arrow.svg">
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-20 border-separate">
									<div class="text-drop-card">Perum</div>
									<img src="/images/icons/Arrow.svg">
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-20 border-separate">
									<div class="text-drop-card">Blok</div>
									<img src="/images/icons/Arrow.svg">
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-20 border-separate">
									<div class="text-drop-card">No</div>
									<img src="/images/icons/Arrow.svg">
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-25 border-separate">
									<div class="text-drop-card">Tipe</div>
									<img src="/images/icons/Arrow.svg">
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-40 border-separate">
									<div class="text-drop-card">Harga Unit</div>
									<img src="/images/icons/Arrow.svg">
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-40 border-separate">
									<div class="text-drop-card">Pricelist</div>
									<img src="/images/icons/Arrow.svg">
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-40 border-separate">
									<div class="text-drop-card">Konsumen</div>
									<img src="/images/icons/Arrow.svg">
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-40 border-separate">
									<div class="text-drop-card">Head Marketing</div>
									<img src="/images/icons/Arrow.svg">
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-40 border-separate">
									<div class="text-drop-card">Marketing</div>
									<img src="/images/icons/Arrow.svg">
								</div>
								<div class="flex flex-direction-col flex-center-vertical w-50 border-separate-2">
									<div class="flex w-100 flex-center-horizontal border-bottom-seperate">
										<div class="text-drop-card padding-spec-nup-1">Booking Fee</div>
									</div>
									<div class="flex w-100 flex-center-horizontal">
										<div class="flex flex-center-horizontal w-60 border-separate-2">
											<div class="text-drop-card padding-spec-nup-1 ">Tanggal</div>
										</div>
										<div class="flex flex-center-horizontal w-40">
											<div class="text-drop-card padding-spec-nup-1">Nominal</div>
										</div>
									</div>
								</div>
								<div class="flex flex-direction-col flex-center-vertical w-50 border-separate-2">
									<div class="flex w-100 flex-center-horizontal border-bottom-seperate">
										<div class="text-drop-card padding-spec-nup-1">Down Payment</div>
									</div>
									<div class="flex w-100 flex-center-horizontal">
										<div class="flex flex-center-horizontal w-60 border-separate-2">
											<div class="text-drop-card padding-spec-nup-1 ">Tanggal</div>
										</div>
										<div class="flex flex-center-horizontal w-40">
											<div class="text-drop-card padding-spec-nup-1">Nominal</div>
										</div>
									</div>
								</div>
								<div class="flex flex-direction-col flex-center-vertical w-80 border-separate-2">
									<div class="flex w-100 flex-center-horizontal border-bottom-seperate">
										<div class="text-drop-card padding-spec-nup-1">Closing Fee</div>
									</div>
									<div class="flex w-100 flex-center-horizontal">
										<div class="flex flex-center-horizontal w-31 border-separate-2">
											<div class="text-drop-card padding-spec-nup-1 ">Tanggal</div>
										</div>
										<div class="flex flex-center-horizontal w-31 border-separate-2">
											<div class="text-drop-card padding-spec-nup-1">Voucher</div>
										</div>
										<div class="flex flex-center-horizontal w-31">
											<div class="text-drop-card padding-spec-nup-1 ">Nominal</div>
										</div>
									</div>
								</div>
								<div class="flex flex-direction-col flex-center-vertical w-80 border-separate-2">
									<div class="flex w-100 flex-center-horizontal border-bottom-seperate">
										<div class="text-drop-card padding-spec-nup-1">Pengembalian Down Payment</div>
									</div>
									<div class="flex w-100 flex-center-horizontal">
										<div class="flex flex-center-horizontal w-31 border-separate-2">
											<div class="text-drop-card padding-spec-nup-1 ">Tanggal</div>
										</div>
										<div class="flex flex-center-horizontal w-31 border-separate-2">
											<div class="text-drop-card padding-spec-nup-1">Nominal</div>
										</div>
										<div class="flex flex-center-horizontal w-31">
											<div class="text-drop-card padding-spec-nup-1 ">Pendapatan</div>
										</div>
									</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-60 border-separate">
									<div class="text-drop-card">Pendapatan Atas Perubahan</div>
									<img src="/images/icons/Arrow.svg">
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-40 border-separate">
									<div class="text-drop-card">Plafond BTN</div>
									<img src="/images/icons/Arrow.svg">
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-50 border-separate">
									<div class="text-drop-card">Tanggal Akad</div>
									<img src="/images/icons/Arrow.svg">
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-50 border-separate">
									<div class="text-drop-card">Pencairan Akad dari BTN/Pembayaran Cash</div>
									<img src="/images/icons/Arrow.svg">
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-50 border-separate">
									<div class="text-drop-card">Pembayaran DP atas Penjualan</div>
									<img src="/images/icons/Arrow.svg">
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-30 border-separate">
									<div class="text-drop-card">Sisa/Kekurangan Pembayaran</div>
									<img src="/images/icons/Arrow.svg">
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-40 border-separate">
									<div class="text-drop-card">Pembayaran Selisih Plafond</div>
									<img src="/images/icons/Arrow.svg">
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-40 border-separate">
									<div class="text-drop-card">Retensi</div>
									<img src="/images/icons/Arrow.svg">
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-40 border-separate">
									<div class="text-drop-card">Pencairan Retensi</div>
									<img src="/images/icons/Arrow.svg">
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-40 border-separate">
									<div class="text-drop-card">Sisa Retensi</div>
									<img src="/images/icons/Arrow.svg">
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-40 border-separate">
									<div class="text-drop-card">Sisa/Kekurangan Notaris</div>
									<img src="/images/icons/Arrow.svg">
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-40 border-separate">
									<div class="text-drop-card">Pembayaran Surat dan Notaris</div>
									<img src="/images/icons/Arrow.svg">
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-40 border-separate">
									<div class="text-drop-card">Kekurangan Yang Belum Diterima</div>
									<img src="/images/icons/Arrow.svg">
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-40 border-separate">
									<div class="text-drop-card">Pembayaran Ke Notaris & Bank</div>
									<img src="/images/icons/Arrow.svg">
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-40 border-separate">
									<div class="text-drop-card">SBUM</div>
									<img src="/images/icons/Arrow.svg">
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-40 border-separate">
									<div class="text-drop-card">Pencairan SBUM</div>
									<img src="/images/icons/Arrow.svg">
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-40 border-separate">
									<div class="text-drop-card">Hutang/Piutang Konsumen Atas Notaris</div>
									<img src="/images/icons/Arrow.svg">
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-40 border-separate">
									<div class="text-drop-card">Titipan Akta Hutang</div>
									<img src="/images/icons/Arrow.svg">
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-40 border-separate">
									<div class="text-drop-card">Titipan Akta Hutang</div>
									<img src="/images/icons/Arrow.svg">
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-40 border-separate">
									<div class="text-drop-card">Kelebihan Pembayaran Tanah</div>
									<img src="/images/icons/Arrow.svg">
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-40 border-separate">
									<div class="text-drop-card">Penerimaan Atas Subsidi</div>
									<img src="/images/icons/Arrow.svg">
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-40 border-separate">
									<div class="text-drop-card">Total Pencairan</div>
									<img src="/images/icons/Arrow.svg">
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-10 border-non-separate">
									<div class="text-drop-card">Aksi</div>
									<img src="/images/icons/Arrow.svg">
								</div>
							</div>
						</div>
						<a href="/super-admin/kompilasi-perumahan/detail-kompilasi-perumahan" class="no-decor">
							<div class="card-head w-content-2 height-fit">
								<div class="flex">
									<div class="flex flex-gap-small flex-center-vertical w-30 no-border-table">
										<div class="text-drop-card">NMGAO16</div>
									</div>
									<div class="flex flex-gap-small flex-center-vertical w-20 no-border-table">
										<div class="text-drop-card">NMG</div>
									</div>
									<div class="flex flex-gap-small flex-center-vertical w-20 no-border-table">
										<div class="text-drop-card">AO</div>
									</div>
									<div class="flex flex-gap-small flex-center-vertical w-20 no-border-table">
										<div class="text-drop-card">16</div>
									</div>
									<div class="flex flex-gap-small flex-center-vertical w-25 no-border-table">
										<div class="text-drop-card">36/104</div>
									</div>
									<div class="flex flex-gap-small flex-center-vertical w-40 no-border-table">
										<div class="text-drop-card">Rp. 5.000.000</div>
									</div>
									<div class="flex flex-gap-small flex-center-vertical w-40 no-border-table">
										<div class="text-drop-card">V.2018.04.14</div>
									</div>
									<div class="flex flex-direction-col flex-center-vertical flex-center-horizontal w-100">
										<div class="flex w-100 flex-center-horizontal flex-center-vertical">
											<div class="flex flex-center-horizontal w-31">
												<div class="text-drop-card padding-spec-nup-1 ">1 Feb 23</div>
											</div>
											<div class="flex flex-center-horizontal w-31">
												<div class="text-drop-card padding-spec-nup-1">1 Feb 23</div>
											</div>
											<div class="flex flex-center-horizontal w-31">
												<div class="text-drop-card padding-spec-nup-1 ">1 Feb 23</div>
											</div>
										</div>
									</div>
									<div class="flex flex-gap-small flex-center-vertical w-60 no-border-table">
										<div class="text-approve">100%</div>
									</div>
									<div class="flex flex-gap-small flex-center-vertical w-40 no-border-table">
										<div class="text-approve">Tersedia</div>
									</div>
									<div class="flex flex-direction-col flex-center-vertical flex-center-horizontal w-100">
										<div class="flex w-100 flex-center-horizontal">
											<div class="flex flex-center-horizontal w-20">
												<div class="text-drop-card padding-spec-nup-1 "><input type="checkbox" name="" checked></div>
											</div>
											<div class="flex flex-center-horizontal w-20">
												<div class="text-drop-card padding-spec-nup-1"><input type="checkbox" name="" checked></div>
											</div>
											<div class="flex flex-center-horizontal w-20">
												<div class="text-drop-card padding-spec-nup-1"><input type="checkbox" name="" checked></div>
											</div>
											<div class="flex flex-center-horizontal w-40">
												<div class="text-drop-card padding-spec-nup-1 "><input type="checkbox" name="" checked></div>
											</div>
										</div>
									</div>
									<div class="flex flex-direction-col flex-center-vertical flex-center-horizontal w-90">
										<div class="flex w-100 flex-center-horizontal">
											<div class="flex flex-center-horizontal w-60 flex-gap-semi-large">
												<div class="text-drop-card padding-spec-nup-1 "><input type="radio" name="" checked> <label>Makadam</label></div>
												<div class="text-drop-card padding-spec-nup-1"><input type="radio" name=""> <label>Cor</label></div>
											</div>
											<div class="flex flex-center-horizontal w-40">
												<div class="text-drop-card padding-spec-nup-1 "><input type="checkbox" name="" checked></div>
											</div>
										</div>
									</div>
									<div class="flex flex-direction-col flex-center-vertical flex-center-horizontal w-70">
										<div class="flex w-100 flex-center-horizontal">
											<div class="flex flex-center-horizontal w-50">
												<div class="text-drop-card padding-spec-nup-1"><input type="checkbox" name="" checked></div>
											</div>
											<div class="flex flex-center-horizontal w-50">
												<div class="text-drop-card padding-spec-nup-1"><input type="checkbox" name="" checked></div>
											</div>
										</div>
									</div>
									<div class="flex flex-direction-col flex-center-vertical flex-center-horizontal w-50">
										<div class="flex w-100 flex-center-horizontal">
											<div class="flex flex-center-horizontal w-100">
												<div class="text-drop-card padding-spec-nup-1 "><input type="checkbox" name="" checked></div>
											</div>
										</div>
									</div>
									<div class="flex flex-direction-col flex-center-vertical w-100 flex-center-horizontal">
										<div class="flex w-100 flex-center-horizontal">
											<div class="flex flex-center-horizontal w-31">
												<div class="text-drop-card padding-spec-nup-1 "><input type="checkbox" name="" checked></div>
											</div>
											<div class="flex flex-center-horizontal w-31">
												<div class="text-drop-card padding-spec-nup-1"><input type="checkbox" name="" checked></div>
											</div>
											<div class="flex flex-center-horizontal w-31">
												<div class="text-drop-card padding-spec-nup-1 "><input type="checkbox" name="" checked></div>
											</div>
										</div>
									</div>
									<div class="flex flex-direction-col flex-center-vertical w-70 flex-center-horizontal">
										<div class="flex w-100 flex-center-horizontal">
											<div class="flex flex-center-horizontal w-50">
												<div class="text-drop-card padding-spec-nup-1 "><input type="checkbox" name="" checked></div>
											</div>
											<div class="flex flex-center-horizontal w-50">
												<div class="text-drop-card padding-spec-nup-1"><input type="checkbox" name="" checked></div>
											</div>
										</div>
									</div>
									<div class="flex flex-gap-small flex-center-vertical w-50 no-border-table">
										<div class="text-drop-card">Selesai melakukan akad</div>
									</div>
									<div class="flex flex-gap-small flex-center-vertical flex-center-horizontal w-30 no-border-table">
										<div class="text-drop-card padding-spec-nup-1"><input type="checkbox" name="" checked></div>
									</div>
									<div class="flex flex-gap-semi-large flex-center-vertical w-40 no-border-table">
										<div class="text-drop-card padding-spec-nup-1 "><input type="radio" name="" checked> <label>SPH</label></div>
										<div class="text-drop-card padding-spec-nup-1"><input type="radio" name=""> <label>Cash</label></div>
									</div>
									<div class="flex flex-gap-small flex-center-vertical flex-center-horizontal w-20 no-border-table">
										<div class="text-drop-card padding-spec-nup-1"><input type="checkbox" name="" checked></div>
									</div>
									<div class="flex flex-gap-small flex-center-vertical w-10 no-border-table">
										<a href="/super-admin/nup/edit-nup" class="no-decor"><img src="/images/icons/Edit.svg"></a>
										<img src="/images/icons/Delete.svg">
									</div>
								</div>
							</div>
						</a>
						<div class="card-head w-content-2 height-fit">
							<div class="flex">
								<div class="flex flex-gap-small flex-center-vertical w-30 no-border-table">
									<div class="text-drop-card">NMGAO16</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-20 no-border-table">
									<div class="text-drop-card">NMG</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-20 no-border-table">
									<div class="text-drop-card">AO</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-20 no-border-table">
									<div class="text-drop-card">16</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-25 no-border-table">
									<div class="text-drop-card">36/104</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-40 no-border-table">
									<div class="text-drop-card">Rp. 5.000.000</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-40 no-border-table">
									<div class="text-drop-card">V.2018.04.14</div>
								</div>
								<div class="flex flex-direction-col flex-center-vertical flex-center-horizontal w-100">
									<div class="flex w-100 flex-center-horizontal flex-center-vertical">
										<div class="flex flex-center-horizontal w-31">
											<div class="text-drop-card padding-spec-nup-1 ">1 Feb 23</div>
										</div>
										<div class="flex flex-center-horizontal w-31">
											<div class="text-drop-card padding-spec-nup-1">1 Feb 23</div>
										</div>
										<div class="flex flex-center-horizontal w-31">
											<div class="text-drop-card padding-spec-nup-1 ">1 Feb 23</div>
										</div>
									</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-60 no-border-table">
									<div class="text-approve">100%</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-40 no-border-table">
									<div class="text-approve">Tersedia</div>
								</div>
								<div class="flex flex-direction-col flex-center-vertical flex-center-horizontal w-100">
									<div class="flex w-100 flex-center-horizontal">
										<div class="flex flex-center-horizontal w-20">
											<div class="text-drop-card padding-spec-nup-1 "><input type="checkbox" name="" checked></div>
										</div>
										<div class="flex flex-center-horizontal w-20">
											<div class="text-drop-card padding-spec-nup-1"><input type="checkbox" name="" checked></div>
										</div>
										<div class="flex flex-center-horizontal w-20">
											<div class="text-drop-card padding-spec-nup-1"><input type="checkbox" name="" checked></div>
										</div>
										<div class="flex flex-center-horizontal w-40">
											<div class="text-drop-card padding-spec-nup-1 "><input type="checkbox" name="" checked></div>
										</div>
									</div>
								</div>
								<div class="flex flex-direction-col flex-center-vertical flex-center-horizontal w-90">
									<div class="flex w-100 flex-center-horizontal">
										<div class="flex flex-center-horizontal w-60 flex-gap-semi-large">
											<div class="text-drop-card padding-spec-nup-1 "><input type="radio" name="" checked> <label>Makadam</label></div>
											<div class="text-drop-card padding-spec-nup-1"><input type="radio" name=""> <label>Cor</label></div>
										</div>
										<div class="flex flex-center-horizontal w-40">
											<div class="text-drop-card padding-spec-nup-1 "><input type="checkbox" name="" checked></div>
										</div>
									</div>
								</div>
								<div class="flex flex-direction-col flex-center-vertical flex-center-horizontal w-70">
									<div class="flex w-100 flex-center-horizontal">
										<div class="flex flex-center-horizontal w-50">
											<div class="text-drop-card padding-spec-nup-1"><input type="checkbox" name="" checked></div>
										</div>
										<div class="flex flex-center-horizontal w-50">
											<div class="text-drop-card padding-spec-nup-1"><input type="checkbox" name="" checked></div>
										</div>
									</div>
								</div>
								<div class="flex flex-direction-col flex-center-vertical flex-center-horizontal w-50">
									<div class="flex w-100 flex-center-horizontal">
										<div class="flex flex-center-horizontal w-100">
											<div class="text-drop-card padding-spec-nup-1 "><input type="checkbox" name="" checked></div>
										</div>
									</div>
								</div>
								<div class="flex flex-direction-col flex-center-vertical w-100 flex-center-horizontal">
									<div class="flex w-100 flex-center-horizontal">
										<div class="flex flex-center-horizontal w-31">
											<div class="text-drop-card padding-spec-nup-1 "><input type="checkbox" name="" checked></div>
										</div>
										<div class="flex flex-center-horizontal w-31">
											<div class="text-drop-card padding-spec-nup-1"><input type="checkbox" name="" checked></div>
										</div>
										<div class="flex flex-center-horizontal w-31">
											<div class="text-drop-card padding-spec-nup-1 "><input type="checkbox" name="" checked></div>
										</div>
									</div>
								</div>
								<div class="flex flex-direction-col flex-center-vertical w-70 flex-center-horizontal">
									<div class="flex w-100 flex-center-horizontal">
										<div class="flex flex-center-horizontal w-50">
											<div class="text-drop-card padding-spec-nup-1 "><input type="checkbox" name="" checked></div>
										</div>
										<div class="flex flex-center-horizontal w-50">
											<div class="text-drop-card padding-spec-nup-1"><input type="checkbox" name="" checked></div>
										</div>
									</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-50 no-border-table">
									<div class="text-drop-card">Selesai melakukan akad</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical flex-center-horizontal w-30 no-border-table">
									<div class="text-drop-card padding-spec-nup-1"><input type="checkbox" name="" checked></div>
								</div>
								<div class="flex flex-gap-semi-large flex-center-vertical w-40 no-border-table">
									<div class="text-drop-card padding-spec-nup-1 "><input type="radio" name="" checked> <label>SPH</label></div>
									<div class="text-drop-card padding-spec-nup-1"><input type="radio" name=""> <label>Cash</label></div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical flex-center-horizontal w-20 no-border-table">
									<div class="text-drop-card padding-spec-nup-1"><input type="checkbox" name="" checked></div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-10 no-border-table">
									<a href="/super-admin/nup/edit-nup" class="no-decor"><img src="/images/icons/Edit.svg"></a>
									<img src="/images/icons/Delete.svg">
								</div>
							</div>
						</div>
						<div class="card-head w-content-2 height-fit">
							<div class="flex">
								<div class="flex flex-gap-small flex-center-vertical w-30 no-border-table">
									<div class="text-drop-card">NMGAO16</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-20 no-border-table">
									<div class="text-drop-card">NMG</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-20 no-border-table">
									<div class="text-drop-card">AO</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-20 no-border-table">
									<div class="text-drop-card">16</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-25 no-border-table">
									<div class="text-drop-card">36/104</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-40 no-border-table">
									<div class="text-drop-card">Rp. 5.000.000</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-40 no-border-table">
									<div class="text-drop-card">V.2018.04.14</div>
								</div>
								<div class="flex flex-direction-col flex-center-vertical flex-center-horizontal w-100">
									<div class="flex w-100 flex-center-horizontal flex-center-vertical">
										<div class="flex flex-center-horizontal w-31">
											<div class="text-drop-card padding-spec-nup-1 ">1 Feb 23</div>
										</div>
										<div class="flex flex-center-horizontal w-31">
											<div class="text-drop-card padding-spec-nup-1">1 Feb 23</div>
										</div>
										<div class="flex flex-center-horizontal w-31">
											<div class="text-drop-card padding-spec-nup-1 ">1 Feb 23</div>
										</div>
									</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-60 no-border-table">
									<div class="text-approve">100%</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-40 no-border-table">
									<div class="text-approve">Tersedia</div>
								</div>
								<div class="flex flex-direction-col flex-center-vertical flex-center-horizontal w-100">
									<div class="flex w-100 flex-center-horizontal">
										<div class="flex flex-center-horizontal w-20">
											<div class="text-drop-card padding-spec-nup-1 "><input type="checkbox" name="" checked></div>
										</div>
										<div class="flex flex-center-horizontal w-20">
											<div class="text-drop-card padding-spec-nup-1"><input type="checkbox" name="" checked></div>
										</div>
										<div class="flex flex-center-horizontal w-20">
											<div class="text-drop-card padding-spec-nup-1"><input type="checkbox" name="" checked></div>
										</div>
										<div class="flex flex-center-horizontal w-40">
											<div class="text-drop-card padding-spec-nup-1 "><input type="checkbox" name="" checked></div>
										</div>
									</div>
								</div>
								<div class="flex flex-direction-col flex-center-vertical flex-center-horizontal w-90">
									<div class="flex w-100 flex-center-horizontal">
										<div class="flex flex-center-horizontal w-60 flex-gap-semi-large">
											<div class="text-drop-card padding-spec-nup-1 "><input type="radio" name="" checked> <label>Makadam</label></div>
											<div class="text-drop-card padding-spec-nup-1"><input type="radio" name=""> <label>Cor</label></div>
										</div>
										<div class="flex flex-center-horizontal w-40">
											<div class="text-drop-card padding-spec-nup-1 "><input type="checkbox" name="" checked></div>
										</div>
									</div>
								</div>
								<div class="flex flex-direction-col flex-center-vertical flex-center-horizontal w-70">
									<div class="flex w-100 flex-center-horizontal">
										<div class="flex flex-center-horizontal w-50">
											<div class="text-drop-card padding-spec-nup-1"><input type="checkbox" name="" checked></div>
										</div>
										<div class="flex flex-center-horizontal w-50">
											<div class="text-drop-card padding-spec-nup-1"><input type="checkbox" name="" checked></div>
										</div>
									</div>
								</div>
								<div class="flex flex-direction-col flex-center-vertical flex-center-horizontal w-50">
									<div class="flex w-100 flex-center-horizontal">
										<div class="flex flex-center-horizontal w-100">
											<div class="text-drop-card padding-spec-nup-1 "><input type="checkbox" name="" checked></div>
										</div>
									</div>
								</div>
								<div class="flex flex-direction-col flex-center-vertical w-100 flex-center-horizontal">
									<div class="flex w-100 flex-center-horizontal">
										<div class="flex flex-center-horizontal w-31">
											<div class="text-drop-card padding-spec-nup-1 "><input type="checkbox" name="" checked></div>
										</div>
										<div class="flex flex-center-horizontal w-31">
											<div class="text-drop-card padding-spec-nup-1"><input type="checkbox" name="" checked></div>
										</div>
										<div class="flex flex-center-horizontal w-31">
											<div class="text-drop-card padding-spec-nup-1 "><input type="checkbox" name="" checked></div>
										</div>
									</div>
								</div>
								<div class="flex flex-direction-col flex-center-vertical w-70 flex-center-horizontal">
									<div class="flex w-100 flex-center-horizontal">
										<div class="flex flex-center-horizontal w-50">
											<div class="text-drop-card padding-spec-nup-1 "><input type="checkbox" name="" checked></div>
										</div>
										<div class="flex flex-center-horizontal w-50">
											<div class="text-drop-card padding-spec-nup-1"><input type="checkbox" name="" checked></div>
										</div>
									</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-50 no-border-table">
									<div class="text-drop-card">Selesai melakukan akad</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical flex-center-horizontal w-30 no-border-table">
									<div class="text-drop-card padding-spec-nup-1"><input type="checkbox" name="" checked></div>
								</div>
								<div class="flex flex-gap-semi-large flex-center-vertical w-40 no-border-table">
									<div class="text-drop-card padding-spec-nup-1 "><input type="radio" name="" checked> <label>SPH</label></div>
									<div class="text-drop-card padding-spec-nup-1"><input type="radio" name=""> <label>Cash</label></div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical flex-center-horizontal w-20 no-border-table">
									<div class="text-drop-card padding-spec-nup-1"><input type="checkbox" name="" checked></div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-10 no-border-table">
									<a href="/super-admin/nup/edit-nup" class="no-decor"><img src="/images/icons/Edit.svg"></a>
									<img src="/images/icons/Delete.svg">
								</div>
							</div>
						</div>
						<div class="card-head w-content-2 height-fit">
							<div class="flex">
								<div class="flex flex-gap-small flex-center-vertical w-30 no-border-table">
									<div class="text-drop-card">NMGAO16</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-20 no-border-table">
									<div class="text-drop-card">NMG</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-20 no-border-table">
									<div class="text-drop-card">AO</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-20 no-border-table">
									<div class="text-drop-card">16</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-25 no-border-table">
									<div class="text-drop-card">36/104</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-40 no-border-table">
									<div class="text-drop-card">Rp. 5.000.000</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-40 no-border-table">
									<div class="text-drop-card">V.2018.04.14</div>
								</div>
								<div class="flex flex-direction-col flex-center-vertical flex-center-horizontal w-100">
									<div class="flex w-100 flex-center-horizontal flex-center-vertical">
										<div class="flex flex-center-horizontal w-31">
											<div class="text-drop-card padding-spec-nup-1 ">1 Feb 23</div>
										</div>
										<div class="flex flex-center-horizontal w-31">
											<div class="text-drop-card padding-spec-nup-1">1 Feb 23</div>
										</div>
										<div class="flex flex-center-horizontal w-31">
											<div class="text-drop-card padding-spec-nup-1 ">1 Feb 23</div>
										</div>
									</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-60 no-border-table">
									<div class="text-approve">100%</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-40 no-border-table">
									<div class="text-approve">Tersedia</div>
								</div>
								<div class="flex flex-direction-col flex-center-vertical flex-center-horizontal w-100">
									<div class="flex w-100 flex-center-horizontal">
										<div class="flex flex-center-horizontal w-20">
											<div class="text-drop-card padding-spec-nup-1 "><input type="checkbox" name="" checked></div>
										</div>
										<div class="flex flex-center-horizontal w-20">
											<div class="text-drop-card padding-spec-nup-1"><input type="checkbox" name="" checked></div>
										</div>
										<div class="flex flex-center-horizontal w-20">
											<div class="text-drop-card padding-spec-nup-1"><input type="checkbox" name="" checked></div>
										</div>
										<div class="flex flex-center-horizontal w-40">
											<div class="text-drop-card padding-spec-nup-1 "><input type="checkbox" name="" checked></div>
										</div>
									</div>
								</div>
								<div class="flex flex-direction-col flex-center-vertical flex-center-horizontal w-90">
									<div class="flex w-100 flex-center-horizontal">
										<div class="flex flex-center-horizontal w-60 flex-gap-semi-large">
											<div class="text-drop-card padding-spec-nup-1 "><input type="radio" name="" checked> <label>Makadam</label></div>
											<div class="text-drop-card padding-spec-nup-1"><input type="radio" name=""> <label>Cor</label></div>
										</div>
										<div class="flex flex-center-horizontal w-40">
											<div class="text-drop-card padding-spec-nup-1 "><input type="checkbox" name="" checked></div>
										</div>
									</div>
								</div>
								<div class="flex flex-direction-col flex-center-vertical flex-center-horizontal w-70">
									<div class="flex w-100 flex-center-horizontal">
										<div class="flex flex-center-horizontal w-50">
											<div class="text-drop-card padding-spec-nup-1"><input type="checkbox" name="" checked></div>
										</div>
										<div class="flex flex-center-horizontal w-50">
											<div class="text-drop-card padding-spec-nup-1"><input type="checkbox" name="" checked></div>
										</div>
									</div>
								</div>
								<div class="flex flex-direction-col flex-center-vertical flex-center-horizontal w-50">
									<div class="flex w-100 flex-center-horizontal">
										<div class="flex flex-center-horizontal w-100">
											<div class="text-drop-card padding-spec-nup-1 "><input type="checkbox" name="" checked></div>
										</div>
									</div>
								</div>
								<div class="flex flex-direction-col flex-center-vertical w-100 flex-center-horizontal">
									<div class="flex w-100 flex-center-horizontal">
										<div class="flex flex-center-horizontal w-31">
											<div class="text-drop-card padding-spec-nup-1 "><input type="checkbox" name="" checked></div>
										</div>
										<div class="flex flex-center-horizontal w-31">
											<div class="text-drop-card padding-spec-nup-1"><input type="checkbox" name="" checked></div>
										</div>
										<div class="flex flex-center-horizontal w-31">
											<div class="text-drop-card padding-spec-nup-1 "><input type="checkbox" name="" checked></div>
										</div>
									</div>
								</div>
								<div class="flex flex-direction-col flex-center-vertical w-70 flex-center-horizontal">
									<div class="flex w-100 flex-center-horizontal">
										<div class="flex flex-center-horizontal w-50">
											<div class="text-drop-card padding-spec-nup-1 "><input type="checkbox" name="" checked></div>
										</div>
										<div class="flex flex-center-horizontal w-50">
											<div class="text-drop-card padding-spec-nup-1"><input type="checkbox" name="" checked></div>
										</div>
									</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-50 no-border-table">
									<div class="text-drop-card">Selesai melakukan akad</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical flex-center-horizontal w-30 no-border-table">
									<div class="text-drop-card padding-spec-nup-1"><input type="checkbox" name="" checked></div>
								</div>
								<div class="flex flex-gap-semi-large flex-center-vertical w-40 no-border-table">
									<div class="text-drop-card padding-spec-nup-1 "><input type="radio" name="" checked> <label>SPH</label></div>
									<div class="text-drop-card padding-spec-nup-1"><input type="radio" name=""> <label>Cash</label></div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical flex-center-horizontal w-20 no-border-table">
									<div class="text-drop-card padding-spec-nup-1"><input type="checkbox" name="" checked></div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-10 no-border-table">
									<a href="/super-admin/nup/edit-nup" class="no-decor"><img src="/images/icons/Edit.svg"></a>
									<img src="/images/icons/Delete.svg">
								</div>
							</div>
						</div>
						<div class="card-head w-content-2 height-fit">
							<div class="flex">
								<div class="flex flex-gap-small flex-center-vertical w-30 no-border-table">
									<div class="text-drop-card">NMGAO16</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-20 no-border-table">
									<div class="text-drop-card">NMG</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-20 no-border-table">
									<div class="text-drop-card">AO</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-20 no-border-table">
									<div class="text-drop-card">16</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-25 no-border-table">
									<div class="text-drop-card">36/104</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-40 no-border-table">
									<div class="text-drop-card">Rp. 5.000.000</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-40 no-border-table">
									<div class="text-drop-card">V.2018.04.14</div>
								</div>
								<div class="flex flex-direction-col flex-center-vertical flex-center-horizontal w-100">
									<div class="flex w-100 flex-center-horizontal flex-center-vertical">
										<div class="flex flex-center-horizontal w-31">
											<div class="text-drop-card padding-spec-nup-1 ">1 Feb 23</div>
										</div>
										<div class="flex flex-center-horizontal w-31">
											<div class="text-drop-card padding-spec-nup-1">1 Feb 23</div>
										</div>
										<div class="flex flex-center-horizontal w-31">
											<div class="text-drop-card padding-spec-nup-1 ">1 Feb 23</div>
										</div>
									</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-60 no-border-table">
									<div class="text-approve">100%</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-40 no-border-table">
									<div class="text-approve">Tersedia</div>
								</div>
								<div class="flex flex-direction-col flex-center-vertical flex-center-horizontal w-100">
									<div class="flex w-100 flex-center-horizontal">
										<div class="flex flex-center-horizontal w-20">
											<div class="text-drop-card padding-spec-nup-1 "><input type="checkbox" name="" checked></div>
										</div>
										<div class="flex flex-center-horizontal w-20">
											<div class="text-drop-card padding-spec-nup-1"><input type="checkbox" name="" checked></div>
										</div>
										<div class="flex flex-center-horizontal w-20">
											<div class="text-drop-card padding-spec-nup-1"><input type="checkbox" name="" checked></div>
										</div>
										<div class="flex flex-center-horizontal w-40">
											<div class="text-drop-card padding-spec-nup-1 "><input type="checkbox" name="" checked></div>
										</div>
									</div>
								</div>
								<div class="flex flex-direction-col flex-center-vertical flex-center-horizontal w-90">
									<div class="flex w-100 flex-center-horizontal">
										<div class="flex flex-center-horizontal w-60 flex-gap-semi-large">
											<div class="text-drop-card padding-spec-nup-1 "><input type="radio" name="" checked> <label>Makadam</label></div>
											<div class="text-drop-card padding-spec-nup-1"><input type="radio" name=""> <label>Cor</label></div>
										</div>
										<div class="flex flex-center-horizontal w-40">
											<div class="text-drop-card padding-spec-nup-1 "><input type="checkbox" name="" checked></div>
										</div>
									</div>
								</div>
								<div class="flex flex-direction-col flex-center-vertical flex-center-horizontal w-70">
									<div class="flex w-100 flex-center-horizontal">
										<div class="flex flex-center-horizontal w-50">
											<div class="text-drop-card padding-spec-nup-1"><input type="checkbox" name="" checked></div>
										</div>
										<div class="flex flex-center-horizontal w-50">
											<div class="text-drop-card padding-spec-nup-1"><input type="checkbox" name="" checked></div>
										</div>
									</div>
								</div>
								<div class="flex flex-direction-col flex-center-vertical flex-center-horizontal w-50">
									<div class="flex w-100 flex-center-horizontal">
										<div class="flex flex-center-horizontal w-100">
											<div class="text-drop-card padding-spec-nup-1 "><input type="checkbox" name="" checked></div>
										</div>
									</div>
								</div>
								<div class="flex flex-direction-col flex-center-vertical w-100 flex-center-horizontal">
									<div class="flex w-100 flex-center-horizontal">
										<div class="flex flex-center-horizontal w-31">
											<div class="text-drop-card padding-spec-nup-1 "><input type="checkbox" name="" checked></div>
										</div>
										<div class="flex flex-center-horizontal w-31">
											<div class="text-drop-card padding-spec-nup-1"><input type="checkbox" name="" checked></div>
										</div>
										<div class="flex flex-center-horizontal w-31">
											<div class="text-drop-card padding-spec-nup-1 "><input type="checkbox" name="" checked></div>
										</div>
									</div>
								</div>
								<div class="flex flex-direction-col flex-center-vertical w-70 flex-center-horizontal">
									<div class="flex w-100 flex-center-horizontal">
										<div class="flex flex-center-horizontal w-50">
											<div class="text-drop-card padding-spec-nup-1 "><input type="checkbox" name="" checked></div>
										</div>
										<div class="flex flex-center-horizontal w-50">
											<div class="text-drop-card padding-spec-nup-1"><input type="checkbox" name="" checked></div>
										</div>
									</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-50 no-border-table">
									<div class="text-drop-card">Selesai melakukan akad</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical flex-center-horizontal w-30 no-border-table">
									<div class="text-drop-card padding-spec-nup-1"><input type="checkbox" name="" checked></div>
								</div>
								<div class="flex flex-gap-semi-large flex-center-vertical w-40 no-border-table">
									<div class="text-drop-card padding-spec-nup-1 "><input type="radio" name="" checked> <label>SPH</label></div>
									<div class="text-drop-card padding-spec-nup-1"><input type="radio" name=""> <label>Cash</label></div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical flex-center-horizontal w-20 no-border-table">
									<div class="text-drop-card padding-spec-nup-1"><input type="checkbox" name="" checked></div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-10 no-border-table">
									<a href="/super-admin/nup/edit-nup" class="no-decor"><img src="/images/icons/Edit.svg"></a>
									<img src="/images/icons/Delete.svg">
								</div>
							</div>
						</div>
						<div class="card-head w-content-2 height-fit">
							<div class="flex">
								<div class="flex flex-gap-small flex-center-vertical w-30 no-border-table">
									<div class="text-drop-card">NMGAO16</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-20 no-border-table">
									<div class="text-drop-card">NMG</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-20 no-border-table">
									<div class="text-drop-card">AO</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-20 no-border-table">
									<div class="text-drop-card">16</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-25 no-border-table">
									<div class="text-drop-card">36/104</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-40 no-border-table">
									<div class="text-drop-card">Rp. 5.000.000</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-40 no-border-table">
									<div class="text-drop-card">V.2018.04.14</div>
								</div>
								<div class="flex flex-direction-col flex-center-vertical flex-center-horizontal w-100">
									<div class="flex w-100 flex-center-horizontal flex-center-vertical">
										<div class="flex flex-center-horizontal w-31">
											<div class="text-drop-card padding-spec-nup-1 ">1 Feb 23</div>
										</div>
										<div class="flex flex-center-horizontal w-31">
											<div class="text-drop-card padding-spec-nup-1">1 Feb 23</div>
										</div>
										<div class="flex flex-center-horizontal w-31">
											<div class="text-drop-card padding-spec-nup-1 ">1 Feb 23</div>
										</div>
									</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-60 no-border-table">
									<div class="text-approve">100%</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-40 no-border-table">
									<div class="text-approve">Tersedia</div>
								</div>
								<div class="flex flex-direction-col flex-center-vertical flex-center-horizontal w-100">
									<div class="flex w-100 flex-center-horizontal">
										<div class="flex flex-center-horizontal w-20">
											<div class="text-drop-card padding-spec-nup-1 "><input type="checkbox" name="" checked></div>
										</div>
										<div class="flex flex-center-horizontal w-20">
											<div class="text-drop-card padding-spec-nup-1"><input type="checkbox" name="" checked></div>
										</div>
										<div class="flex flex-center-horizontal w-20">
											<div class="text-drop-card padding-spec-nup-1"><input type="checkbox" name="" checked></div>
										</div>
										<div class="flex flex-center-horizontal w-40">
											<div class="text-drop-card padding-spec-nup-1 "><input type="checkbox" name="" checked></div>
										</div>
									</div>
								</div>
								<div class="flex flex-direction-col flex-center-vertical flex-center-horizontal w-90">
									<div class="flex w-100 flex-center-horizontal">
										<div class="flex flex-center-horizontal w-60 flex-gap-semi-large">
											<div class="text-drop-card padding-spec-nup-1 "><input type="radio" name="" checked> <label>Makadam</label></div>
											<div class="text-drop-card padding-spec-nup-1"><input type="radio" name=""> <label>Cor</label></div>
										</div>
										<div class="flex flex-center-horizontal w-40">
											<div class="text-drop-card padding-spec-nup-1 "><input type="checkbox" name="" checked></div>
										</div>
									</div>
								</div>
								<div class="flex flex-direction-col flex-center-vertical flex-center-horizontal w-70">
									<div class="flex w-100 flex-center-horizontal">
										<div class="flex flex-center-horizontal w-50">
											<div class="text-drop-card padding-spec-nup-1"><input type="checkbox" name="" checked></div>
										</div>
										<div class="flex flex-center-horizontal w-50">
											<div class="text-drop-card padding-spec-nup-1"><input type="checkbox" name="" checked></div>
										</div>
									</div>
								</div>
								<div class="flex flex-direction-col flex-center-vertical flex-center-horizontal w-50">
									<div class="flex w-100 flex-center-horizontal">
										<div class="flex flex-center-horizontal w-100">
											<div class="text-drop-card padding-spec-nup-1 "><input type="checkbox" name="" checked></div>
										</div>
									</div>
								</div>
								<div class="flex flex-direction-col flex-center-vertical w-100 flex-center-horizontal">
									<div class="flex w-100 flex-center-horizontal">
										<div class="flex flex-center-horizontal w-31">
											<div class="text-drop-card padding-spec-nup-1 "><input type="checkbox" name="" checked></div>
										</div>
										<div class="flex flex-center-horizontal w-31">
											<div class="text-drop-card padding-spec-nup-1"><input type="checkbox" name="" checked></div>
										</div>
										<div class="flex flex-center-horizontal w-31">
											<div class="text-drop-card padding-spec-nup-1 "><input type="checkbox" name="" checked></div>
										</div>
									</div>
								</div>
								<div class="flex flex-direction-col flex-center-vertical w-70 flex-center-horizontal">
									<div class="flex w-100 flex-center-horizontal">
										<div class="flex flex-center-horizontal w-50">
											<div class="text-drop-card padding-spec-nup-1 "><input type="checkbox" name="" checked></div>
										</div>
										<div class="flex flex-center-horizontal w-50">
											<div class="text-drop-card padding-spec-nup-1"><input type="checkbox" name="" checked></div>
										</div>
									</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-50 no-border-table">
									<div class="text-drop-card">Selesai melakukan akad</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical flex-center-horizontal w-30 no-border-table">
									<div class="text-drop-card padding-spec-nup-1"><input type="checkbox" name="" checked></div>
								</div>
								<div class="flex flex-gap-semi-large flex-center-vertical w-40 no-border-table">
									<div class="text-drop-card padding-spec-nup-1 "><input type="radio" name="" checked> <label>SPH</label></div>
									<div class="text-drop-card padding-spec-nup-1"><input type="radio" name=""> <label>Cash</label></div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical flex-center-horizontal w-20 no-border-table">
									<div class="text-drop-card padding-spec-nup-1"><input type="checkbox" name="" checked></div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-10 no-border-table">
									<a href="/super-admin/nup/edit-nup" class="no-decor"><img src="/images/icons/Edit.svg"></a>
									<img src="/images/icons/Delete.svg">
								</div>
							</div>
						</div>
						<div class="card-head w-content-2 height-fit">
							<div class="flex">
								<div class="flex flex-gap-small flex-center-vertical w-30 no-border-table">
									<div class="text-drop-card">NMGAO16</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-20 no-border-table">
									<div class="text-drop-card">NMG</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-20 no-border-table">
									<div class="text-drop-card">AO</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-20 no-border-table">
									<div class="text-drop-card">16</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-25 no-border-table">
									<div class="text-drop-card">36/104</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-40 no-border-table">
									<div class="text-drop-card">Rp. 5.000.000</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-40 no-border-table">
									<div class="text-drop-card">V.2018.04.14</div>
								</div>
								<div class="flex flex-direction-col flex-center-vertical flex-center-horizontal w-100">
									<div class="flex w-100 flex-center-horizontal flex-center-vertical">
										<div class="flex flex-center-horizontal w-31">
											<div class="text-drop-card padding-spec-nup-1 ">1 Feb 23</div>
										</div>
										<div class="flex flex-center-horizontal w-31">
											<div class="text-drop-card padding-spec-nup-1">1 Feb 23</div>
										</div>
										<div class="flex flex-center-horizontal w-31">
											<div class="text-drop-card padding-spec-nup-1 ">1 Feb 23</div>
										</div>
									</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-60 no-border-table">
									<div class="text-approve">100%</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-40 no-border-table">
									<div class="text-approve">Tersedia</div>
								</div>
								<div class="flex flex-direction-col flex-center-vertical flex-center-horizontal w-100">
									<div class="flex w-100 flex-center-horizontal">
										<div class="flex flex-center-horizontal w-20">
											<div class="text-drop-card padding-spec-nup-1 "><input type="checkbox" name="" checked></div>
										</div>
										<div class="flex flex-center-horizontal w-20">
											<div class="text-drop-card padding-spec-nup-1"><input type="checkbox" name="" checked></div>
										</div>
										<div class="flex flex-center-horizontal w-20">
											<div class="text-drop-card padding-spec-nup-1"><input type="checkbox" name="" checked></div>
										</div>
										<div class="flex flex-center-horizontal w-40">
											<div class="text-drop-card padding-spec-nup-1 "><input type="checkbox" name="" checked></div>
										</div>
									</div>
								</div>
								<div class="flex flex-direction-col flex-center-vertical flex-center-horizontal w-90">
									<div class="flex w-100 flex-center-horizontal">
										<div class="flex flex-center-horizontal w-60 flex-gap-semi-large">
											<div class="text-drop-card padding-spec-nup-1 "><input type="radio" name="" checked> <label>Makadam</label></div>
											<div class="text-drop-card padding-spec-nup-1"><input type="radio" name=""> <label>Cor</label></div>
										</div>
										<div class="flex flex-center-horizontal w-40">
											<div class="text-drop-card padding-spec-nup-1 "><input type="checkbox" name="" checked></div>
										</div>
									</div>
								</div>
								<div class="flex flex-direction-col flex-center-vertical flex-center-horizontal w-70">
									<div class="flex w-100 flex-center-horizontal">
										<div class="flex flex-center-horizontal w-50">
											<div class="text-drop-card padding-spec-nup-1"><input type="checkbox" name="" checked></div>
										</div>
										<div class="flex flex-center-horizontal w-50">
											<div class="text-drop-card padding-spec-nup-1"><input type="checkbox" name="" checked></div>
										</div>
									</div>
								</div>
								<div class="flex flex-direction-col flex-center-vertical flex-center-horizontal w-50">
									<div class="flex w-100 flex-center-horizontal">
										<div class="flex flex-center-horizontal w-100">
											<div class="text-drop-card padding-spec-nup-1 "><input type="checkbox" name="" checked></div>
										</div>
									</div>
								</div>
								<div class="flex flex-direction-col flex-center-vertical w-100 flex-center-horizontal">
									<div class="flex w-100 flex-center-horizontal">
										<div class="flex flex-center-horizontal w-31">
											<div class="text-drop-card padding-spec-nup-1 "><input type="checkbox" name="" checked></div>
										</div>
										<div class="flex flex-center-horizontal w-31">
											<div class="text-drop-card padding-spec-nup-1"><input type="checkbox" name="" checked></div>
										</div>
										<div class="flex flex-center-horizontal w-31">
											<div class="text-drop-card padding-spec-nup-1 "><input type="checkbox" name="" checked></div>
										</div>
									</div>
								</div>
								<div class="flex flex-direction-col flex-center-vertical w-70 flex-center-horizontal">
									<div class="flex w-100 flex-center-horizontal">
										<div class="flex flex-center-horizontal w-50">
											<div class="text-drop-card padding-spec-nup-1 "><input type="checkbox" name="" checked></div>
										</div>
										<div class="flex flex-center-horizontal w-50">
											<div class="text-drop-card padding-spec-nup-1"><input type="checkbox" name="" checked></div>
										</div>
									</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-50 no-border-table">
									<div class="text-drop-card">Selesai melakukan akad</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical flex-center-horizontal w-30 no-border-table">
									<div class="text-drop-card padding-spec-nup-1"><input type="checkbox" name="" checked></div>
								</div>
								<div class="flex flex-gap-semi-large flex-center-vertical w-40 no-border-table">
									<div class="text-drop-card padding-spec-nup-1 "><input type="radio" name="" checked> <label>SPH</label></div>
									<div class="text-drop-card padding-spec-nup-1"><input type="radio" name=""> <label>Cash</label></div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical flex-center-horizontal w-20 no-border-table">
									<div class="text-drop-card padding-spec-nup-1"><input type="checkbox" name="" checked></div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-10 no-border-table">
									<a href="/super-admin/nup/edit-nup" class="no-decor"><img src="/images/icons/Edit.svg"></a>
									<img src="/images/icons/Delete.svg">
								</div>
							</div>
						</div>
						<div class="card-head w-content-2 height-fit">
							<div class="flex">
								<div class="flex flex-gap-small flex-center-vertical w-30 no-border-table">
									<div class="text-drop-card">NMGAO16</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-20 no-border-table">
									<div class="text-drop-card">NMG</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-20 no-border-table">
									<div class="text-drop-card">AO</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-20 no-border-table">
									<div class="text-drop-card">16</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-25 no-border-table">
									<div class="text-drop-card">36/104</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-40 no-border-table">
									<div class="text-drop-card">Rp. 5.000.000</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-40 no-border-table">
									<div class="text-drop-card">V.2018.04.14</div>
								</div>
								<div class="flex flex-direction-col flex-center-vertical flex-center-horizontal w-100">
									<div class="flex w-100 flex-center-horizontal flex-center-vertical">
										<div class="flex flex-center-horizontal w-31">
											<div class="text-drop-card padding-spec-nup-1 ">1 Feb 23</div>
										</div>
										<div class="flex flex-center-horizontal w-31">
											<div class="text-drop-card padding-spec-nup-1">1 Feb 23</div>
										</div>
										<div class="flex flex-center-horizontal w-31">
											<div class="text-drop-card padding-spec-nup-1 ">1 Feb 23</div>
										</div>
									</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-60 no-border-table">
									<div class="text-approve">100%</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-40 no-border-table">
									<div class="text-approve">Tersedia</div>
								</div>
								<div class="flex flex-direction-col flex-center-vertical flex-center-horizontal w-100">
									<div class="flex w-100 flex-center-horizontal">
										<div class="flex flex-center-horizontal w-20">
											<div class="text-drop-card padding-spec-nup-1 "><input type="checkbox" name="" checked></div>
										</div>
										<div class="flex flex-center-horizontal w-20">
											<div class="text-drop-card padding-spec-nup-1"><input type="checkbox" name="" checked></div>
										</div>
										<div class="flex flex-center-horizontal w-20">
											<div class="text-drop-card padding-spec-nup-1"><input type="checkbox" name="" checked></div>
										</div>
										<div class="flex flex-center-horizontal w-40">
											<div class="text-drop-card padding-spec-nup-1 "><input type="checkbox" name="" checked></div>
										</div>
									</div>
								</div>
								<div class="flex flex-direction-col flex-center-vertical flex-center-horizontal w-90">
									<div class="flex w-100 flex-center-horizontal">
										<div class="flex flex-center-horizontal w-60 flex-gap-semi-large">
											<div class="text-drop-card padding-spec-nup-1 "><input type="radio" name="" checked> <label>Makadam</label></div>
											<div class="text-drop-card padding-spec-nup-1"><input type="radio" name=""> <label>Cor</label></div>
										</div>
										<div class="flex flex-center-horizontal w-40">
											<div class="text-drop-card padding-spec-nup-1 "><input type="checkbox" name="" checked></div>
										</div>
									</div>
								</div>
								<div class="flex flex-direction-col flex-center-vertical flex-center-horizontal w-70">
									<div class="flex w-100 flex-center-horizontal">
										<div class="flex flex-center-horizontal w-50">
											<div class="text-drop-card padding-spec-nup-1"><input type="checkbox" name="" checked></div>
										</div>
										<div class="flex flex-center-horizontal w-50">
											<div class="text-drop-card padding-spec-nup-1"><input type="checkbox" name="" checked></div>
										</div>
									</div>
								</div>
								<div class="flex flex-direction-col flex-center-vertical flex-center-horizontal w-50">
									<div class="flex w-100 flex-center-horizontal">
										<div class="flex flex-center-horizontal w-100">
											<div class="text-drop-card padding-spec-nup-1 "><input type="checkbox" name="" checked></div>
										</div>
									</div>
								</div>
								<div class="flex flex-direction-col flex-center-vertical w-100 flex-center-horizontal">
									<div class="flex w-100 flex-center-horizontal">
										<div class="flex flex-center-horizontal w-31">
											<div class="text-drop-card padding-spec-nup-1 "><input type="checkbox" name="" checked></div>
										</div>
										<div class="flex flex-center-horizontal w-31">
											<div class="text-drop-card padding-spec-nup-1"><input type="checkbox" name="" checked></div>
										</div>
										<div class="flex flex-center-horizontal w-31">
											<div class="text-drop-card padding-spec-nup-1 "><input type="checkbox" name="" checked></div>
										</div>
									</div>
								</div>
								<div class="flex flex-direction-col flex-center-vertical w-70 flex-center-horizontal">
									<div class="flex w-100 flex-center-horizontal">
										<div class="flex flex-center-horizontal w-50">
											<div class="text-drop-card padding-spec-nup-1 "><input type="checkbox" name="" checked></div>
										</div>
										<div class="flex flex-center-horizontal w-50">
											<div class="text-drop-card padding-spec-nup-1"><input type="checkbox" name="" checked></div>
										</div>
									</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-50 no-border-table">
									<div class="text-drop-card">Selesai melakukan akad</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical flex-center-horizontal w-30 no-border-table">
									<div class="text-drop-card padding-spec-nup-1"><input type="checkbox" name="" checked></div>
								</div>
								<div class="flex flex-gap-semi-large flex-center-vertical w-40 no-border-table">
									<div class="text-drop-card padding-spec-nup-1 "><input type="radio" name="" checked> <label>SPH</label></div>
									<div class="text-drop-card padding-spec-nup-1"><input type="radio" name=""> <label>Cash</label></div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical flex-center-horizontal w-20 no-border-table">
									<div class="text-drop-card padding-spec-nup-1"><input type="checkbox" name="" checked></div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-10 no-border-table">
									<a href="/super-admin/nup/edit-nup" class="no-decor"><img src="/images/icons/Edit.svg"></a>
									<img src="/images/icons/Delete.svg">
								</div>
							</div>
						</div>
						<div class="card-head w-content-2 height-fit">
							<div class="flex">
								<div class="flex flex-gap-small flex-center-vertical w-30 no-border-table">
									<div class="text-drop-card">NMGAO16</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-20 no-border-table">
									<div class="text-drop-card">NMG</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-20 no-border-table">
									<div class="text-drop-card">AO</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-20 no-border-table">
									<div class="text-drop-card">16</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-25 no-border-table">
									<div class="text-drop-card">36/104</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-40 no-border-table">
									<div class="text-drop-card">Rp. 5.000.000</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-40 no-border-table">
									<div class="text-drop-card">V.2018.04.14</div>
								</div>
								<div class="flex flex-direction-col flex-center-vertical flex-center-horizontal w-100">
									<div class="flex w-100 flex-center-horizontal flex-center-vertical">
										<div class="flex flex-center-horizontal w-31">
											<div class="text-drop-card padding-spec-nup-1 ">1 Feb 23</div>
										</div>
										<div class="flex flex-center-horizontal w-31">
											<div class="text-drop-card padding-spec-nup-1">1 Feb 23</div>
										</div>
										<div class="flex flex-center-horizontal w-31">
											<div class="text-drop-card padding-spec-nup-1 ">1 Feb 23</div>
										</div>
									</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-60 no-border-table">
									<div class="text-approve">100%</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-40 no-border-table">
									<div class="text-approve">Tersedia</div>
								</div>
								<div class="flex flex-direction-col flex-center-vertical flex-center-horizontal w-100">
									<div class="flex w-100 flex-center-horizontal">
										<div class="flex flex-center-horizontal w-20">
											<div class="text-drop-card padding-spec-nup-1 "><input type="checkbox" name="" checked></div>
										</div>
										<div class="flex flex-center-horizontal w-20">
											<div class="text-drop-card padding-spec-nup-1"><input type="checkbox" name="" checked></div>
										</div>
										<div class="flex flex-center-horizontal w-20">
											<div class="text-drop-card padding-spec-nup-1"><input type="checkbox" name="" checked></div>
										</div>
										<div class="flex flex-center-horizontal w-40">
											<div class="text-drop-card padding-spec-nup-1 "><input type="checkbox" name="" checked></div>
										</div>
									</div>
								</div>
								<div class="flex flex-direction-col flex-center-vertical flex-center-horizontal w-90">
									<div class="flex w-100 flex-center-horizontal">
										<div class="flex flex-center-horizontal w-60 flex-gap-semi-large">
											<div class="text-drop-card padding-spec-nup-1 "><input type="radio" name="" checked> <label>Makadam</label></div>
											<div class="text-drop-card padding-spec-nup-1"><input type="radio" name=""> <label>Cor</label></div>
										</div>
										<div class="flex flex-center-horizontal w-40">
											<div class="text-drop-card padding-spec-nup-1 "><input type="checkbox" name="" checked></div>
										</div>
									</div>
								</div>
								<div class="flex flex-direction-col flex-center-vertical flex-center-horizontal w-70">
									<div class="flex w-100 flex-center-horizontal">
										<div class="flex flex-center-horizontal w-50">
											<div class="text-drop-card padding-spec-nup-1"><input type="checkbox" name="" checked></div>
										</div>
										<div class="flex flex-center-horizontal w-50">
											<div class="text-drop-card padding-spec-nup-1"><input type="checkbox" name="" checked></div>
										</div>
									</div>
								</div>
								<div class="flex flex-direction-col flex-center-vertical flex-center-horizontal w-50">
									<div class="flex w-100 flex-center-horizontal">
										<div class="flex flex-center-horizontal w-100">
											<div class="text-drop-card padding-spec-nup-1 "><input type="checkbox" name="" checked></div>
										</div>
									</div>
								</div>
								<div class="flex flex-direction-col flex-center-vertical w-100 flex-center-horizontal">
									<div class="flex w-100 flex-center-horizontal">
										<div class="flex flex-center-horizontal w-31">
											<div class="text-drop-card padding-spec-nup-1 "><input type="checkbox" name="" checked></div>
										</div>
										<div class="flex flex-center-horizontal w-31">
											<div class="text-drop-card padding-spec-nup-1"><input type="checkbox" name="" checked></div>
										</div>
										<div class="flex flex-center-horizontal w-31">
											<div class="text-drop-card padding-spec-nup-1 "><input type="checkbox" name="" checked></div>
										</div>
									</div>
								</div>
								<div class="flex flex-direction-col flex-center-vertical w-70 flex-center-horizontal">
									<div class="flex w-100 flex-center-horizontal">
										<div class="flex flex-center-horizontal w-50">
											<div class="text-drop-card padding-spec-nup-1 "><input type="checkbox" name="" checked></div>
										</div>
										<div class="flex flex-center-horizontal w-50">
											<div class="text-drop-card padding-spec-nup-1"><input type="checkbox" name="" checked></div>
										</div>
									</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-50 no-border-table">
									<div class="text-drop-card">Selesai melakukan akad</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical flex-center-horizontal w-30 no-border-table">
									<div class="text-drop-card padding-spec-nup-1"><input type="checkbox" name="" checked></div>
								</div>
								<div class="flex flex-gap-semi-large flex-center-vertical w-40 no-border-table">
									<div class="text-drop-card padding-spec-nup-1 "><input type="radio" name="" checked> <label>SPH</label></div>
									<div class="text-drop-card padding-spec-nup-1"><input type="radio" name=""> <label>Cash</label></div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical flex-center-horizontal w-20 no-border-table">
									<div class="text-drop-card padding-spec-nup-1"><input type="checkbox" name="" checked></div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-10 no-border-table">
									<a href="/super-admin/nup/edit-nup" class="no-decor"><img src="/images/icons/Edit.svg"></a>
									<img src="/images/icons/Delete.svg">
								</div>
							</div>
						</div>
						<div class="card-head w-content-2 height-fit">
							<div class="flex">
								<div class="flex flex-gap-small flex-center-vertical w-30 no-border-table">
									<div class="text-drop-card">NMGAO16</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-20 no-border-table">
									<div class="text-drop-card">NMG</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-20 no-border-table">
									<div class="text-drop-card">AO</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-20 no-border-table">
									<div class="text-drop-card">16</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-25 no-border-table">
									<div class="text-drop-card">36/104</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-40 no-border-table">
									<div class="text-drop-card">Rp. 5.000.000</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-40 no-border-table">
									<div class="text-drop-card">V.2018.04.14</div>
								</div>
								<div class="flex flex-direction-col flex-center-vertical flex-center-horizontal w-100">
									<div class="flex w-100 flex-center-horizontal flex-center-vertical">
										<div class="flex flex-center-horizontal w-31">
											<div class="text-drop-card padding-spec-nup-1 ">1 Feb 23</div>
										</div>
										<div class="flex flex-center-horizontal w-31">
											<div class="text-drop-card padding-spec-nup-1">1 Feb 23</div>
										</div>
										<div class="flex flex-center-horizontal w-31">
											<div class="text-drop-card padding-spec-nup-1 ">1 Feb 23</div>
										</div>
									</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-60 no-border-table">
									<div class="text-approve">100%</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-40 no-border-table">
									<div class="text-approve">Tersedia</div>
								</div>
								<div class="flex flex-direction-col flex-center-vertical flex-center-horizontal w-100">
									<div class="flex w-100 flex-center-horizontal">
										<div class="flex flex-center-horizontal w-20">
											<div class="text-drop-card padding-spec-nup-1 "><input type="checkbox" name="" checked></div>
										</div>
										<div class="flex flex-center-horizontal w-20">
											<div class="text-drop-card padding-spec-nup-1"><input type="checkbox" name="" checked></div>
										</div>
										<div class="flex flex-center-horizontal w-20">
											<div class="text-drop-card padding-spec-nup-1"><input type="checkbox" name="" checked></div>
										</div>
										<div class="flex flex-center-horizontal w-40">
											<div class="text-drop-card padding-spec-nup-1 "><input type="checkbox" name="" checked></div>
										</div>
									</div>
								</div>
								<div class="flex flex-direction-col flex-center-vertical flex-center-horizontal w-90">
									<div class="flex w-100 flex-center-horizontal">
										<div class="flex flex-center-horizontal w-60 flex-gap-semi-large">
											<div class="text-drop-card padding-spec-nup-1 "><input type="radio" name="" checked> <label>Makadam</label></div>
											<div class="text-drop-card padding-spec-nup-1"><input type="radio" name=""> <label>Cor</label></div>
										</div>
										<div class="flex flex-center-horizontal w-40">
											<div class="text-drop-card padding-spec-nup-1 "><input type="checkbox" name="" checked></div>
										</div>
									</div>
								</div>
								<div class="flex flex-direction-col flex-center-vertical flex-center-horizontal w-70">
									<div class="flex w-100 flex-center-horizontal">
										<div class="flex flex-center-horizontal w-50">
											<div class="text-drop-card padding-spec-nup-1"><input type="checkbox" name="" checked></div>
										</div>
										<div class="flex flex-center-horizontal w-50">
											<div class="text-drop-card padding-spec-nup-1"><input type="checkbox" name="" checked></div>
										</div>
									</div>
								</div>
								<div class="flex flex-direction-col flex-center-vertical flex-center-horizontal w-50">
									<div class="flex w-100 flex-center-horizontal">
										<div class="flex flex-center-horizontal w-100">
											<div class="text-drop-card padding-spec-nup-1 "><input type="checkbox" name="" checked></div>
										</div>
									</div>
								</div>
								<div class="flex flex-direction-col flex-center-vertical w-100 flex-center-horizontal">
									<div class="flex w-100 flex-center-horizontal">
										<div class="flex flex-center-horizontal w-31">
											<div class="text-drop-card padding-spec-nup-1 "><input type="checkbox" name="" checked></div>
										</div>
										<div class="flex flex-center-horizontal w-31">
											<div class="text-drop-card padding-spec-nup-1"><input type="checkbox" name="" checked></div>
										</div>
										<div class="flex flex-center-horizontal w-31">
											<div class="text-drop-card padding-spec-nup-1 "><input type="checkbox" name="" checked></div>
										</div>
									</div>
								</div>
								<div class="flex flex-direction-col flex-center-vertical w-70 flex-center-horizontal">
									<div class="flex w-100 flex-center-horizontal">
										<div class="flex flex-center-horizontal w-50">
											<div class="text-drop-card padding-spec-nup-1 "><input type="checkbox" name="" checked></div>
										</div>
										<div class="flex flex-center-horizontal w-50">
											<div class="text-drop-card padding-spec-nup-1"><input type="checkbox" name="" checked></div>
										</div>
									</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-50 no-border-table">
									<div class="text-drop-card">Selesai melakukan akad</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical flex-center-horizontal w-30 no-border-table">
									<div class="text-drop-card padding-spec-nup-1"><input type="checkbox" name="" checked></div>
								</div>
								<div class="flex flex-gap-semi-large flex-center-vertical w-40 no-border-table">
									<div class="text-drop-card padding-spec-nup-1 "><input type="radio" name="" checked> <label>SPH</label></div>
									<div class="text-drop-card padding-spec-nup-1"><input type="radio" name=""> <label>Cash</label></div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical flex-center-horizontal w-20 no-border-table">
									<div class="text-drop-card padding-spec-nup-1"><input type="checkbox" name="" checked></div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-10 no-border-table">
									<a href="/super-admin/nup/edit-nup" class="no-decor"><img src="/images/icons/Edit.svg"></a>
									<img src="/images/icons/Delete.svg">
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
								<div class="text-display-sort">dari <span class="bold-number">28</span> data NUP</div>
							</div>
							<div class="flex flex-gap-regular flex-center-vertical">
								<div class="flex flex-center-vertical flex-center-horizontal border-pagination"><img src="/images/icons/Arrow_Left.svg"></div>
								<div class="flex flex-center-vertical flex-center-horizontal border-pagination"><div class="text-display-sort bold-number">1</div></div>
								<div class="flex flex-center-vertical flex-center-horizontal border-pagination"><img src="/images/icons/Arrow_Right.svg"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>