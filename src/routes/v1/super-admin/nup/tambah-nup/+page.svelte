<script type="text/javascript">
	import Sidebar from '../../../../../components/sidebar.svelte'
	import Navbar from '../../../../../components/navbar.svelte'
	import { onMount } from 'svelte';
	import {fly, scale} from 'svelte/transition'
	
</script>

<div id="after-login-layout">
	<Navbar/>
	<div class="flex">
		<Sidebar statusPointer="Nup" pagePointer="admin"/>
		<div class="w-80 content">
			<div class="flex flex-direction-col flex-gap-large" in:fly={{ y: -20, duration: 600 }}>
				<div class="flex flex-direction-col flex-gap-semi-large w-100">
					<div class="flex flex-direction-col flex-gap-semi-small w-100">
						<div class="title-content">Form Tambah NUP</div>
						<div class="flex flex-gap-regular flex-center-vertical">
							<div class="text-breadcrumb">NUP</div>
							<img src="/images/icons/Arrow_Right.svg">
							<div class="text-breadcrumb-active">Tambah NUP</div>
						</div>
					</div>
					<div class="card w-70">
						<div class="flex flex-direction-col flex-gap-semi-large">
							<div class="flex flex-center-vertical">
								<div class="title-card-tambah-nup">Identitas Pemesan</div>
							</div>
							<div class="flex flex-gap-regular">
								<div class="flex flex-direction-col flex-gap-small w-60">
									<div class="title-input-nup">Nama Lengkap<span class="obligatory-input">*</span></div>
									<input type="text" name="" class="input-nup" placeholder=" nama..">
								</div>
								<div class="flex flex-direction-col flex-gap-small w-40">
									<div class="title-input-nup">Jenis Kelamin<span class="obligatory-input">*</span></div>
									<select class="select-nup">
										<option>Pria</option>
										<option>Wanita</option>
									</select>
								</div>
							</div>
							<div class="flex flex-gap-regular">
								<div class="flex flex-direction-col flex-gap-small w-31">
									<div class="title-input-nup">Nomor KTP<span class="obligatory-input">*</span></div>
									<input type="text" name="" class="input-nup" placeholder=" nomor KTP..">
								</div>
								<div class="flex flex-direction-col flex-gap-small w-31">
									<div class="title-input-nup">Alamat Email</div>
									<input type="text" name="" class="input-nup" placeholder=" alamat email..">
								</div>
								<div class="flex flex-direction-col flex-gap-small w-31">
									<div class="title-input-nup">Nomor Telepon<span class="obligatory-input">*</span></div>
									<input type="text" name="" class="input-nup" placeholder=" nomor telepon..">
								</div>
							</div>
							<div class="flex flex-gap-regular">
								<div class="flex flex-direction-col flex-gap-small w-31">
									<div class="title-input-nup">Status Pernikahan<span class="obligatory-input">*</span></div>
									<select class="select-nup">
										<option>Sudah Menikah</option>
										<option>Belum Menikah</option>
									</select>
								</div>
							</div>
							<div class="flex flex-direction-col flex-gap-semi-small">
								<div class="title-input-nup">Alamat Lengkap (Korespondensi)</div>
								<div class="card-secondary flex flex-direction-col flex-gap-semi-large">
									<div class="flex flex-gap-regular">
										<div class="flex flex-direction-col flex-gap-small w-50">
											<div class="title-input-nup">Alamat Rumah<span class="obligatory-input">*</span></div>
											<input type="text" name="" class="input-nup" placeholder=" alamat rumah..">
										</div>
										<div class="flex flex-direction-col flex-gap-small w-25">
											<div class="title-input-nup">RT<span class="obligatory-input">*</span></div>
											<input type="text" name="" class="input-nup" placeholder=" RT..">
										</div>
										<div class="flex flex-direction-col flex-gap-small w-25">
											<div class="title-input-nup">RW<span class="obligatory-input">*</span></div>
											<input type="text" name="" class="input-nup" placeholder=" RW..">
										</div>
									</div>
									<div class="flex flex-gap-regular">
										<div class="flex flex-direction-col flex-gap-small w-31">
											<div class="title-input-nup">Kelurahan<span class="obligatory-input">*</span></div>
											<input type="text" name="" class="input-nup" placeholder=" kelurahan..">
										</div>
										<div class="flex flex-direction-col flex-gap-small w-31">
											<div class="title-input-nup">Kecamatan<span class="obligatory-input">*</span></div>
											<input type="text" name="" class="input-nup" placeholder=" kecamatan..">
										</div>
										<div class="flex flex-direction-col flex-gap-small w-31">
											<div class="title-input-nup">Kabupaten/Kota<span class="obligatory-input">*</span></div>
											<input type="text" name="" class="input-nup" placeholder=" kabupaten/kota..">
										</div>
									</div>
									<div class="flex flex-gap-regular">
										<div class="flex flex-direction-col flex-gap-small w-40">
											<div class="title-input-nup">Provinsi<span class="obligatory-input">*</span></div>
											<select class="select-nup">
												<option>Jawa Barat</option>
											</select>
										</div>
										<div class="flex flex-direction-col flex-gap-small w-30">
											<div class="title-input-nup">Kode Pos<span class="obligatory-input">*</span></div>
											<input type="text" name="" class="input-nup" placeholder=" kode pos..">
										</div>
									</div>
								</div>
								<div class="title-input-nup">Pekerjaan</div>
								<div class="card-secondary flex flex-direction-col flex-gap-semi-large">
									<div class="flex flex-gap-regular">
										<div class="flex flex-direction-col flex-gap-small w-50">
											<div class="title-input-nup">Nama Pekerjaan<span class="obligatory-input">*</span></div>
											<input type="text" name="" class="input-nup" placeholder=" nama pekerjaan..">
										</div>
										<div class="flex flex-direction-col flex-gap-small w-50">
											<div class="title-input-nup">Koordinat Lokasi Usaha<span class="obligatory-input">*</span></div>
											<input type="text" name="" class="input-nup" placeholder=" koordinat lokasi usaha..">
										</div>
									</div>
									<div class="flex flex-gap-regular">
										<div class="flex flex-direction-col flex-gap-small w-50">
											<div class="title-input-nup">Nomor NPWP<span class="obligatory-input">*</span></div>
											<input type="text" name="" class="input-nup" placeholder=" nomor NPWP..">
										</div>
									</div>
								</div>
								<div class="title-input-nup">Unggah Berkas</div>
								<div class="card-secondary flex flex-direction-col flex-gap-semi-large">
									<div class="flex flex-gap-regular">
										<div class="flex flex-direction-col flex-gap-small w-48">
											<div class="title-input-nup">Foto KTP<span class="obligatory-input">*</span></div>
											<input type="file" class="file-nup">
										</div>
										<div class="flex flex-direction-col flex-gap-small w-48">
											<div class="title-input-nup">Fotokopi KK<span class="obligatory-input">*</span></div>
											<input type="file" class="file-nup">
										</div>
									</div>
									<div class="flex flex-gap-regular">
										<div class="flex flex-direction-col flex-gap-small w-48">
											<div class="title-input-nup">Fotokopi NPWP<span class="obligatory-input">*</span></div>
											<input type="file" class="file-nup">
										</div>
										<div class="flex flex-direction-col flex-gap-small w-48">
											<div class="title-input-nup">Pas Foto Pemesan<span class="obligatory-input">*</span></div>
											<input type="file" class="file-nup">
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="card w-70">
						<div class="flex flex-direction-col flex-gap-semi-large">
							<div class="flex flex-center-vertical">
								<div class="title-card-tambah-nup">Identitas Pasangan</div>
							</div>
							<div class="flex flex-gap-regular">
								<div class="flex flex-direction-col flex-gap-small w-60">
									<div class="title-input-nup">Nama Lengkap</div>
									<input type="text" name="" class="input-nup" placeholder=" nama..">
								</div>
								<div class="flex flex-direction-col flex-gap-small w-40">
									<div class="title-input-nup">Nomor KTP</div>
									<input type="text" name="" class="input-nup" placeholder=" nomor KTP..">
								</div>
							</div>
							<div class="flex flex-direction-col flex-gap-semi-small">
								<div class="title-input-nup">Unggah Berkas</div>
								<div class="card-secondary flex flex-direction-col flex-gap-semi-large">
									<div class="flex flex-gap-regular">
										<div class="flex flex-direction-col flex-gap-small w-48">
											<div class="title-input-nup">Foto KTP</div>
											<input type="file" class="file-nup">
										</div>
										<div class="flex flex-direction-col flex-gap-small w-48">
											<div class="title-input-nup">Pas Foto Pasangan</div>
											<input type="file" class="file-nup">
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="card w-70">
						<div class="flex flex-direction-col flex-gap-semi-large">
							<div class="flex flex-center-vertical">
								<div class="title-card-tambah-nup">Informasi Bank</div>
							</div>
							<div class="flex flex-gap-regular">
								<div class="flex flex-direction-col flex-gap-small w-60">
									<div class="title-input-nup">Nama Bank</div>
									<select class="select-nup">
										<option>Bank Mandiri</option>
									</select>
								</div>
								<div class="flex flex-direction-col flex-gap-small w-40">
									<div class="title-input-nup">Nomor Rekening</div>
									<input type="text" name="" class="input-nup" placeholder="nomor rekening..">
								</div>
							</div>
							<div class="flex flex-gap-regular">
								<div class="flex flex-direction-col flex-gap-small w-60">
									<div class="title-input-nup">Nama di Rekening Bank</div>
									<input type="text" name="" class="input-nup" placeholder="nama di rekening bank..">
								</div>
								<div class="flex flex-direction-col flex-gap-small w-40">
									<div class="title-input-nup">Cabang Bank</div>
									<input type="text" name="" class="input-nup" placeholder="cabang bank..">
								</div>
							</div>
						</div>
					</div>
					<div class="card w-70">
						<div class="flex flex-direction-col flex-gap-semi-large">
							<div class="flex flex-center-vertical">
								<div class="title-card-tambah-nup">Pengajuan Unit</div>
							</div>
							<div class="flex flex-gap-regular">
								<div class="flex flex-direction-col flex-gap-small w-40">
									<div class="title-input-nup">No. NUP<span class="obligatory-input">*</span></div>
									<input type="text" name="" class="input-nup" placeholder="nomor NUP..">
								</div>
							</div>
							<div class="flex flex-gap-regular">
								<div class="flex flex-direction-col flex-gap-small w-31">
									<div class="title-input-nup">Cara Bayar<span class="obligatory-input">*</span></div>
									<select class="select-nup">
										<option>KPR Subsidi</option>
									</select>
								</div>
								<div class="flex flex-direction-col flex-gap-small w-31">
									<div class="title-input-nup">Versi Privelist</div>
									<input type="text" name="" class="input-nup" placeholder=" alamat email..">
								</div>
								<div class="flex flex-direction-col flex-gap-small w-31">
									<div class="title-input-nup">Harga Unit<span class="obligatory-input">*</span></div>
									<input type="text" name="" class="input-nup" placeholder="harga unit..">
								</div>
							</div>
							<div class="flex flex-direction-col flex-gap-semi-small">
								<div class="title-input-nup">Pilihan Unit</div>
								<div class="card-secondary flex flex-direction-col flex-gap-semi-large">
									<div class="title-input-nup">Alternatif 1</div>
									<div class="flex flex-gap-regular">
										<div class="flex flex-direction-col flex-gap-small w-48">
											<div class="title-input-nup">Perumahan<span class="obligatory-input">*</span></div>
											<select class="select-nup">
												<option>Bukit Esma Cicalengka</option>
											</select>
										</div>
										<div class="flex flex-direction-col flex-gap-small w-48">
											<div class="title-input-nup">Jenis Bangunan<span class="obligatory-input">*</span></div>
											<select class="select-nup">
												<option>Perumahan</option>
											</select>
										</div>
									</div>
									<div class="flex flex-gap-regular">
										<div class="flex flex-direction-col flex-gap-small w-20">
											<div class="title-input-nup">Blok<span class="obligatory-input">*</span></div>
											<select class="select-nup">
												<option>AA2</option>
											</select>
										</div>
										<div class="flex flex-direction-col flex-gap-small w-20">
											<div class="title-input-nup">Nomor<span class="obligatory-input">*</span></div>
											<select class="select-nup">
												<option>12</option>
											</select>
										</div>
										<div class="flex flex-direction-col flex-gap-small w-20">
											<div class="title-input-nup">Tipe</div>
											<input type="text" name="" class="input-nup" placeholder="tipe..">
										</div>
										<div class="flex flex-direction-col flex-gap-small w-20">
											<div class="title-input-nup">Lantai</div>
											<input type="text" name="" class="input-nup" placeholder="lantai..">
										</div>
										<div class="flex flex-direction-col flex-gap-small w-20">
											<div class="title-input-nup">Unit</div>
											<input type="text" name="" class="input-nup" placeholder="unit..">
										</div>
									</div>
								</div>
								<div class="flex flex-center-horizontal">
								<button class="btn-transparent flex flex-center-vertical flex-gap-small"><img src="/images/icons/Plus_Blue.svg"> <span>Tambah Alternatif</span></button>
							</div>
							</div>
						</div>
					</div>
					<div class="card w-70">
						<div class="flex flex-direction-col flex-gap-semi-large">
							<div class="flex flex-center-vertical">
								<div class="title-card-tambah-nup">Marketing</div>
							</div>
							<div class="flex flex-gap-regular">
								<div class="flex flex-direction-col flex-gap-small w-60">
									<div class="title-input-nup">Lead Marketing</div>
									<input type="text" name="" class="input-nup" placeholder=" lead marketing..">
								</div>
								<div class="flex flex-direction-col flex-gap-small w-40">
									<div class="title-input-nup">Marketing</div>
									<input type="text" name="" class="input-nup" placeholder="marketing..">
								</div>
							</div>
							<div class="flex flex-direction-col flex-gap-semi-small">
								<div class="title-input-nup">Unggah Berkas</div>
								<div class="card-secondary flex flex-direction-col flex-gap-semi-large">
									<div class="flex flex-gap-regular">
										<div class="flex flex-direction-col flex-gap-small w-48">
											<div class="title-input-nup">Berkas Form NUP</div>
											<input type="file" class="file-nup">
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="card w-70">
						<div class="flex flex-direction-col flex-gap-semi-large">
							<div class="flex flex-center-vertical">
								<div class="title-card-tambah-nup">BI Checking</div>
							</div>
							<div class="flex flex-gap-regular">
								<div class="flex flex-direction-col flex-gap-small w-40">
									<div class="title-input-nup">Status BI Checking</div>
									<select class="select-nup">
										<option>Ya</option>
									</select>
								</div>
							</div>
							<div class="flex flex-gap-regular">
								<div class="flex flex-direction-col flex-gap-small w-31">
									<div class="title-input-nup">Nama Referensi</div>
									<input type="text" name="" class="input-nup" placeholder="nama referensi..">
								</div>
								<div class="flex flex-direction-col flex-gap-small w-31">
									<div class="title-input-nup">Tanggal Pengajuan</div>
									<input type="date" name="" class="input-nup">
								</div>
								<div class="flex flex-direction-col flex-gap-small w-31">
									<div class="title-input-nup">Tanggal Hasil BI Checking</div>
									<input type="date" name="" class="input-nup">
								</div>
							</div>
							<div class="flex flex-gap-regular">
								<div class="flex flex-direction-col flex-gap-small w-50">
									<div class="title-input-nup">Hasil BI Checking</div>
									<input type="text" name="" class="input-nup" placeholder="nama referensi..">
								</div>
								<div class="flex flex-direction-col flex-gap-small w-50">
									<div class="title-input-nup">Hasil BI Checking Pasangan</div>
									<input type="text" name="" class="input-nup" placeholder="nama referensi..">
								</div>
							</div>
						</div>
					</div>
					<div class="card w-70">
						<div class="flex flex-direction-col flex-gap-semi-large">
							<div class="flex flex-center-vertical">
								<div class="title-card-tambah-nup">Pembayaran Booking Fee</div>
							</div>
							<div class="flex flex-gap-regular">
								<div class="flex flex-direction-col flex-gap-small w-60">
									<div class="title-input-nup">Nominal Booking Fee</div>
									<input type="text" name="" class="input-nup" placeholder=" lead marketing..">
								</div>
								<div class="flex flex-direction-col flex-gap-small w-40">
									<div class="title-input-nup">Metode Pembayaran</div>
									<select class="select-nup">
										<option>Transfer</option>
									</select>
								</div>
							</div>
							<div class="flex flex-direction-col flex-gap-semi-small">
								<div class="title-input-nup">Unggah Berkas</div>
								<div class="card-secondary flex flex-direction-col flex-gap-semi-large">
									<div class="flex flex-gap-regular">
										<div class="flex flex-direction-col flex-gap-small w-48">
											<div class="title-input-nup">Fotokopi Stuk Pembayaran/Bukti Transfer</div>
											<input type="file" class="file-nup">
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="flex flex-end-horizontal w-70">
						<div class="w-40 flex flex-gap-regular flex-end-horizontal">
							<button class="btn-outline flex flex-center-vertical flex-gap-small"><span>Batal</span></button>
							<button class="btn-fill flex flex-center-vertical flex-gap-small"><span>Simpan NUP</span></button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>