<script type="text/javascript">
	import Sidebar from '../../../../../components/sidebar.svelte'
	import Navbar from '../../../../../components/navbar.svelte'
	import { onMount } from 'svelte';
	import {fly, scale} from 'svelte/transition'
	
</script>

<div id="after-login-layout">
	<Navbar/>
	<div class="flex">
		<Sidebar statusPointer="Pemberkasan" pagePointer="admin"/>
		<div class="w-80 content">
			<div class="flex flex-direction-col flex-gap-large" in:fly={{ y: -20, duration: 600 }}>
				<div class="flex flex-direction-col flex-gap-semi-large w-100">
					<div class="flex flex-direction-col flex-gap-semi-small w-100">
						<div class="title-content">Form Edit Pemberkasan</div>
						<div class="flex flex-gap-regular flex-center-vertical">
							<div class="text-breadcrumb">Pemberkasan</div>
							<img src="/images/icons/Arrow_Right.svg">
							<div class="text-breadcrumb-active">Edit</div>
						</div>
					</div>
					<div class="card w-70">
						<div class="flex flex-direction-col flex-gap-semi-large">
							<div class="flex flex-center-vertical">
								<div class="title-card-tambah-nup">Pemberkasan</div>
							</div>
							<div class="flex flex-gap-regular">
								<div class="flex flex-direction-col flex-gap-small w-30">
									<div class="title-input-nup">Pengajuan Ke<span class="obligatory-input">*</span></div>
									<select class="select-nup">
										<option>Bank</option>
									</select>
								</div>
								<div class="flex flex-direction-col flex-gap-small w-30">
									<div class="title-input-nup">Kredit<span class="obligatory-input">*</span></div>
									<select class="select-nup">
										<option>Ya</option>
									</select>
								</div>
							</div>
							<div class="flex flex-direction-col flex-gap-semi-small">
								<div class="title-input-nup">Unggah Berkas</div>
								<div class="card-secondary flex flex-direction-col flex-gap-semi-large">
									<div class="flex flex-gap-regular">
										<div class="flex flex-direction-col flex-gap-small w-48">
											<div class="title-input-nup">Slip Gaji</div>
											<input type="file" class="file-nup">
										</div>
										<div class="flex flex-direction-col flex-gap-small w-48">
											<div class="title-input-nup">Rekening Koran 3 Bulan</div>
											<input type="file" class="file-nup">
										</div>
									</div>
									<div class="flex flex-gap-regular">
										<div class="flex flex-direction-col flex-gap-small w-48">
											<div class="title-input-nup">Form SBUM</div>
											<input type="file" class="file-nup">
										</div>
										<div class="flex flex-direction-col flex-gap-small w-48">
											<div class="title-input-nup">Fotokopi Surat Nikah</div>
											<input type="file" class="file-nup">
										</div>
									</div>
									<div class="flex flex-gap-regular">
										<div class="flex flex-direction-col flex-gap-small w-48">
											<div class="title-input-nup">Form SBUM</div>
											<input type="file" class="file-nup">
										</div>
										<div class="flex flex-direction-col flex-gap-small w-48">
											<div class="title-input-nup">Fotokopi Surat Nikah</div>
											<input type="file" class="file-nup">
										</div>
									</div>
									<div class="flex flex-gap-regular">
										<div class="flex flex-direction-col flex-gap-small w-48">
											<div class="title-input-nup">Aplikasi Kredit</div>
											<input type="file" class="file-nup">
										</div>
										<div class="flex flex-direction-col flex-gap-small w-48">
											<div class="title-input-nup">SK Masih Bekerja</div>
											<input type="file" class="file-nup">
										</div>
									</div>
									<div class="flex flex-gap-regular">
										<div class="flex flex-direction-col flex-gap-small w-48">
											<div class="title-input-nup">Fotokopi Kartu Pegawai</div>
											<input type="file" class="file-nup">
										</div>
										<div class="flex flex-direction-col flex-gap-small w-48">
											<div class="title-input-nup">SK Usaha dari Desa</div>
											<input type="file" class="file-nup">
										</div>
									</div>
									<div class="flex flex-gap-regular">
										<div class="flex flex-direction-col flex-gap-small w-48">
											<div class="title-input-nup">SK Belum Memiliki Rumah</div>
											<input type="file" class="file-nup">
										</div>
										<div class="flex flex-direction-col flex-gap-small w-48">
											<div class="title-input-nup">SK Batas Penghasilan Sekeluarga</div>
											<input type="file" class="file-nup">
										</div>
									</div>
									<div class="flex flex-gap-regular">
										<div class="flex flex-direction-col flex-gap-small w-48">
											<div class="title-input-nup">Fotokopi NIB Perusahaan Berlaku Efektif</div>
											<input type="file" class="file-nup">
										</div>
										<div class="flex flex-direction-col flex-gap-small w-48">
											<div class="title-input-nup">Koordinat Lokasi Usaha</div>
											<input type="file" class="file-nup">
										</div>
									</div>
									<div class="flex flex-gap-regular">
										<div class="flex flex-direction-col flex-gap-small w-48">
											<div class="title-input-nup">SK Pengangkatan Kerja</div>
											<input type="file" class="file-nup">
										</div>
										<div class="flex flex-direction-col flex-gap-small w-48">
											<div class="title-input-nup">Fotokopi SPT PPh 21</div>
											<input type="file" class="file-nup">
										</div>
									</div>
									<div class="flex flex-gap-regular">
										<div class="flex flex-direction-col flex-gap-small w-48">
											<div class="title-input-nup">Laporan Keuangan</div>
											<input type="file" class="file-nup">
										</div>
										<div class="flex flex-direction-col flex-gap-small w-48">
											<div class="title-input-nup">Kartu BPJS Ketenaga Kerjaan</div>
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
								<div class="title-card-tambah-nup">Pembayaran Down Payment</div>
							</div>
							<div class="flex flex-gap-regular">
								<div class="flex flex-direction-col flex-gap-small w-30">
									<div class="title-input-nup">Nominal Down Payment</div>
									<input type="text" name="" class="input-nup" placeholder="nominal down payment..">
								</div>
								<div class="flex flex-direction-col flex-gap-small w-30">
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
							<button class="btn-fill flex flex-center-vertical flex-gap-small"><span>Simpan Pemberkasan</span></button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>