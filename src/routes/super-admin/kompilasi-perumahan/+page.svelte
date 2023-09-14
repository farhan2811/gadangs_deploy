<script type="text/javascript">
	import Sidebar from '../../../components/sidebar.svelte'
	import Navbar from '../../../components/navbar.svelte'
	import { onMount } from 'svelte';
	import {fly, scale} from 'svelte/transition'
	
</script>

<div id="after-login-layout">
	<Navbar/>
	<div class="flex">
		<Sidebar statusPointer="Kompilasi" pagePointer="admin"/>
		<div class="w-80 content">
			<div class="flex flex-direction-col flex-gap-large" in:fly={{ y: -20, duration: 600 }}>
				<div class="flex flex-between-horizontal flex-center-vertical w-100">
					<div class="title-content">Daftar Data Kompilasi Perumahan</div>
					<div class="flex flex-gap-regular">
						<button class="btn-outline flex flex-center-vertical flex-gap-small"><span>Download Data Kompilasi</span> <img src="/images/icons/File_Download.svg"></button>
						<a href="/super-admin/kompilasi-perumahan/tambah-kompilasi-perumahan" class="no-decor"><button class="btn-fill flex flex-center-vertical flex-gap-small"><img src="/images/icons/Add_Plus.svg"> <span>Tambah Unit</span></button></a>
					</div>
				</div>
				<div class="flex flex-direction-col flex-gap-regular">
					<div class="flex">
						<select class="select-col-2 w-25">
							<option disabled selected>Semua Perum</option>
							<option>Epicentrum Sepatan</option>
							<option>Serpong</option>
						</select>
					</div>
					<div class="flex flex-gap-semi-large w-100">
						<input type="text" placeholder="Cari Kode" class="input-col-2 w-15">
						<input type="text" placeholder="Blok Rumah" class="input-col-2 w-15">
						<select class="select-col-3 w-15">
							<option disabled selected>Tipe</option>
							<option>Epicentrum Sepatan</option>
							<option>Serpong</option>
						</select>
						<select class="select-col-3 w-15">
							<option disabled selected>Ketersediaan</option>
							<option>Epicentrum Sepatan</option>
							<option>Serpong</option>
						</select>
						<select class="select-col-3 w-15">
							<option disabled selected>Progress</option>
							<option>Epicentrum Sepatan</option>
							<option>Serpong</option>
						</select>
						<select class="select-col-3 w-15">
							<option disabled selected>Progress AMS</option>
							<option>Epicentrum Sepatan</option>
							<option>Serpong</option>
						</select>
					</div>
					<div class="scroll-x flex flex-direction-col flex-gap-regular">
						<div class="card-head w-content-2 height-fit">
							<div class="flex">
								<div class="flex flex-gap-small flex-center-vertical w-30 border-separate">
									<div class="text-drop-card">Kode Unit</div>
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
								<div class="flex flex-direction-col flex-center-vertical w-100 border-separate-2">
									<div class="flex w-100 flex-center-horizontal border-bottom-seperate">
										<div class="text-drop-card padding-spec-nup-1">Waktu Pembangunan</div>
									</div>
									<div class="flex w-100 flex-center-horizontal">
										<div class="flex flex-center-horizontal w-31 border-separate-2">
											<div class="text-drop-card padding-spec-nup-1 ">Mulai</div>
										</div>
										<div class="flex flex-center-horizontal w-31 border-separate-2">
											<div class="text-drop-card padding-spec-nup-1">Target</div>
										</div>
										<div class="flex flex-center-horizontal w-31">
											<div class="text-drop-card padding-spec-nup-1 ">Selesai</div>
										</div>
									</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-60 border-separate">
									<div class="text-drop-card">Progress Pembangunan</div>
									<img src="/images/icons/Arrow.svg">
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-40 border-separate">
									<div class="text-drop-card">Ketersediaan</div>
									<img src="/images/icons/Arrow.svg">
								</div>
								<div class="flex flex-direction-col flex-center-vertical w-100 border-separate-2">
									<div class="flex w-100 flex-center-horizontal border-bottom-seperate">
										<div class="text-drop-card padding-spec-nup-1">Fasilitas Umum</div>
									</div>
									<div class="flex w-100 flex-center-horizontal">
										<div class="flex flex-center-horizontal w-20 border-separate-2">
											<div class="text-drop-card padding-spec-nup-1 ">Air</div>
										</div>
										<div class="flex flex-center-horizontal w-20 border-separate-2">
											<div class="text-drop-card padding-spec-nup-1">SLO</div>
										</div>
										<div class="flex flex-center-horizontal w-20 border-separate-2">
											<div class="text-drop-card padding-spec-nup-1">BP</div>
										</div>
										<div class="flex flex-center-horizontal w-40">
											<div class="text-drop-card padding-spec-nup-1 ">KWh Listrik</div>
										</div>
									</div>
								</div>
								<div class="flex flex-direction-col flex-center-vertical w-90 border-separate-2">
									<div class="flex w-100 flex-center-horizontal border-bottom-seperate">
										<div class="text-drop-card padding-spec-nup-1">Infrastruktur</div>
									</div>
									<div class="flex w-100 flex-center-horizontal">
										<div class="flex flex-center-horizontal w-60 border-separate-2">
											<div class="text-drop-card padding-spec-nup-1 ">Jalan</div>
										</div>
										<div class="flex flex-center-horizontal w-40">
											<div class="text-drop-card padding-spec-nup-1">Drainase</div>
										</div>
									</div>
								</div>
								<div class="flex flex-direction-col flex-center-vertical w-70 border-separate-2">
									<div class="flex w-100 flex-center-horizontal border-bottom-seperate">
										<div class="text-drop-card padding-spec-nup-1">SLF</div>
									</div>
									<div class="flex w-100 flex-center-horizontal">
										<div class="flex flex-center-horizontal w-50 border-separate-2">
											<div class="text-drop-card padding-spec-nup-1 ">SSB</div>
										</div>
										<div class="flex flex-center-horizontal w-50">
											<div class="text-drop-card padding-spec-nup-1">FLPP</div>
										</div>
									</div>
								</div>
								<div class="flex flex-direction-col flex-center-vertical w-50 border-separate-2">
									<div class="flex w-100 flex-center-horizontal border-bottom-seperate">
										<div class="text-drop-card padding-spec-nup-1">Pengesahan</div>
									</div>
									<div class="flex w-100 flex-center-horizontal">
										<div class="flex flex-center-horizontal w-100">
											<div class="text-drop-card padding-spec-nup-1 ">Siteplan</div>
										</div>
									</div>
								</div>
								<div class="flex flex-direction-col flex-center-vertical w-100 border-separate-2">
									<div class="flex w-100 flex-center-horizontal border-bottom-seperate">
										<div class="text-drop-card padding-spec-nup-1">Sertifikat</div>
									</div>
									<div class="flex w-100 flex-center-horizontal">
										<div class="flex flex-center-horizontal w-31 border-separate-2">
											<div class="text-drop-card padding-spec-nup-1 ">Induk</div>
										</div>
										<div class="flex flex-center-horizontal w-31 border-separate-2">
											<div class="text-drop-card padding-spec-nup-1">SPS</div>
										</div>
										<div class="flex flex-center-horizontal w-31">
											<div class="text-drop-card padding-spec-nup-1 ">Splitzing</div>
										</div>
									</div>
								</div>
								<div class="flex flex-direction-col flex-center-vertical w-70 border-separate-2">
									<div class="flex w-100 flex-center-horizontal border-bottom-seperate">
										<div class="text-drop-card padding-spec-nup-1">IMB/PBG</div>
									</div>
									<div class="flex w-100 flex-center-horizontal">
										<div class="flex flex-center-horizontal w-50 border-separate-2">
											<div class="text-drop-card padding-spec-nup-1 ">Induk</div>
										</div>
										<div class="flex flex-center-horizontal w-50">
											<div class="text-drop-card padding-spec-nup-1">Splitzing</div>
										</div>
									</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-50 border-separate">
									<div class="text-drop-card">Progress AMS</div>
									<img src="/images/icons/Arrow.svg">
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-30 border-separate">
									<div class="text-drop-card">Unit Akad</div>
									<img src="/images/icons/Arrow.svg">
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-40 border-separate">
									<div class="text-drop-card">SPH</div>
									<img src="/images/icons/Arrow.svg">
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-20 border-separate">
									<div class="text-drop-card">SPPKR</div>
									<img src="/images/icons/Arrow.svg">
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-10 border-non-separate">
									<div class="text-drop-card">Aksi</div>
									<img src="/images/icons/Arrow.svg">
								</div>
							</div>
						</div>
						<a href="/super-admin/kompilasi-perumahan/detail-kompilasi-perumahan/1" class="no-decor">
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