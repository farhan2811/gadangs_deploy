<script type="text/javascript">
	import Sidebar from '../../../../components/sidebar.svelte'
	import Navbar from '../../../../components/navbar.svelte'
	import { onMount, afterUpdate } from 'svelte';
	import {fly, scale} from 'svelte/transition'
	import ApiController from '../../../../ApiController'

	let counterAlternatif = 1;
	let provinsiList = [];
	let perumahanList = [];
	let blokList = [];

	let form = {
		lead_marketing: '',
		marketing: '',
		berkas_form_nup: null,
		nup: '',
		tipe_pengajuan: 'KPR Subsidi',
		pricelist: '',
		harga_unit: '',
		perumahan_1: '',
		jenis_bangunan_1: 'Perumahan',
		blok_1: '',
		nomor_1: '12',
		tipe_1: '',
		lantai_1: '',
		unit_1: '',
		nama_client: '',
		jenis_kelamin: 'Pria',
		no_ktp: '',
		email: '',
		no_hp: '',
		status_menikah: 'Sudah Menikah',
		alamat: '',
		rt: '',
		rw: '',
		provinsi: 'Jawa Barat',
		kabupaten: '',
		kecamatan: '',
		kelurahan: '',
		kode_pos: '',
		pekerjaan: '',
		koordinat_usaha: '',
		npwp: '',
		fc_ktp: null,
		fc_kk: null,
		fc_npwp: null,
		pas_photo: null,
		nama_pasangan: '',
		no_ktp_pasangan: '',
		fc_ktp_pasangan: null,
		pas_photo_pasangan: null,
		bank: 'Bank Mandiri',
		cabang_bank: '',
		no_rek: '',
		nama_rekening: '',
		bi_status: 'Ya',
		nama_referensi: '',
		tanggal_pengajuan: '',
		tanggal_hasil: '',
		hasil_bi: '',
		hasil_bi_pasangan: '',
		booking_fee: '',
		metode_pembayaran: 'Transfer',
		dokumen_pembayaran: null
	}

	let getProvinsiList = () => {
		ApiController({
			method: 'GET',
			endpoint: `provinsi`
		}).then(response => {
			provinsiList = response.data
		})
	} 

	let getPerumahanList = () => {
		ApiController({
			method: 'GET',
			endpoint: `perumahan`
		}).then(response => {
			perumahanList = response.data.data
		})
	}

	let getBlokList = () => {
		ApiController({
			method: 'GET',
			endpoint: `perumahan/1`
		}).then(response => {
			blokList = response.data.data.blok
			console.log(blokList)
		})
	}

	onMount(async() => {

		function handleSubmit() {
			const formData = new FormData();
			formData.append('lead_marketing', form.lead_marketing);
			formData.append('marketing', form.marketing);
			formData.append('berkas_form_nup', form.berkas_form_nup);
			formData.append('nup', form.nup);
			formData.append('tipe_pengajuan', form.tipe_pengajuan);
			formData.append('pricelist', form.pricelist);
			formData.append('harga_unit', form.harga_unit);
			// formData.append('perumahan', form.perumahan);
			// formData.append('jenis_bangunan', form.jenis_bangunan);
			// formData.append('blok', form.blok);
			// formData.append('nomor', form.nomor);
			// formData.append('tipe', form.tipe);
			// formData.append('lantai', form.lantai);
			// formData.append('unit', form.unit);
			formData.append('nama_client', form.nama_client);
			formData.append('jenis_kelamin', form.jenis_kelamin);
			formData.append('no_ktp', form.no_ktp);
			formData.append('email', form.email);
			formData.append('no_hp', form.no_hp);
			formData.append('status_menikah', form.status_menikah);
			formData.append('alamat', form.alamat);
			formData.append('rt', form.rt);
			formData.append('rw', form.rw);
			formData.append('provinsi', form.provinsi);
			formData.append('kabupaten', form.kabupaten);
			formData.append('kecamatan', form.kecamatan);
			formData.append('kelurahan', form.kelurahan);
			formData.append('kode_pos', form.kode_pos);
			formData.append('pekerjaan', form.pekerjaan);
			formData.append('koordinat_usaha', form.koordinat_usaha);
			formData.append('npwp', form.npwp);
			formData.append('fc_ktp', form.fc_ktp);
			formData.append('fc_kk', form.fc_kk);
			formData.append('fc_npwp', form.fc_npwp);
			formData.append('pas_photo', form.pas_photo);
			formData.append('nama_pasangan', form.nama_pasangan);
			formData.append('no_ktp_pasangan', form.no_ktp_pasangan);
			formData.append('fc_ktp_pasangan', form.fc_ktp_pasangan);
			formData.append('pas_photo_pasangan', form.pas_photo_pasangan);
			formData.append('bank', form.bank);
			formData.append('cabang_bank', form.cabang_bank);
			formData.append('no_rek', form.no_rek);
			formData.append('nama_rekening', form.nama_rekening);
			formData.append('bi_status', form.bi_status);
			formData.append('nama_referensi', form.nama_referensi);
			formData.append('tanggal_pengajuan', form.tanggal_pengajuan);
			formData.append('tanggal_hasil', form.tanggal_hasil);
			formData.append('hasil_bi', form.hasil_bi);
			formData.append('hasil_bi_pasangan', form.hasil_bi_pasangan);
			formData.append('booking_fee', form.booking_fee);
			formData.append('metode_pembayaran', form.metode_pembayaran);
			formData.append('dokumen_pembayaran', form.dokumen_pembayaran);

			// for (i = counterAlternatif; i > 0; i--) {
			// 	formData.append('perumahan', form.perumahan);
			// 	formData.append('jenis_bangunan', form.jenis_bangunan);
			// 	formData.append('blok', form.blok);
			// 	formData.append('nomor', form.nomor);
			// 	formData.append('tipe', form.tipe);
			// 	formData.append('lantai', form.lantai);
			// 	formData.append('unit', form.unit);
			// }


			let postNup = () => {
				ApiController({
					method: "POST",
					endpoint: `nup/add`,
					datas: formData
				}).then(response => {
					console.log(response)
				})
			}
			postNup()
		}

		getProvinsiList();
		getPerumahanList();
		getBlokList();

	})

	afterUpdate(async() => {
		console.log(form)
	})
	
</script>

<div id="after-login-layout">
	<Navbar/>
	<div class="flex">
		<Sidebar statusPointer="Nup" pagePointer="ams"/>
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
								<div class="title-card-tambah-nup">Marketing</div>
							</div>
							<div class="flex flex-gap-regular">
								<div class="flex flex-direction-col flex-gap-small w-60">
									<div class="title-input-nup">Lead Marketing</div>
									<input type="text" name="" class="input-nup" placeholder=" lead marketing.." bind:value={form.lead_marketing}>
								</div>
								<div class="flex flex-direction-col flex-gap-small w-40">
									<div class="title-input-nup">Marketing</div>
									<input type="text" name="" class="input-nup" placeholder="marketing.." bind:value={form.marketing}>
								</div>
							</div>
							<div class="flex flex-direction-col flex-gap-semi-small">
								<div class="title-input-nup">Unggah Berkas</div>
								<div class="card-secondary flex flex-direction-col flex-gap-semi-large">
									<div class="flex flex-gap-regular">
										<div class="flex flex-direction-col flex-gap-small w-48">
											<div class="title-input-nup">Berkas Form NUP</div>
											<input type="file" class="file-nup" bind:files={form.berkas_form_nup}>
										</div>
									</div>
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
									<input type="text" name="" class="input-nup" placeholder="nomor NUP.." bind:value={form.nup}>
								</div>
							</div>
							<div class="flex flex-gap-regular">
								<div class="flex flex-direction-col flex-gap-small w-31">
									<div class="title-input-nup">Cara Bayar<span class="obligatory-input">*</span></div>
									<select class="select-nup" bind:value={form.tipe_pengajuan}>
										<option value="KPR Subsidi">KPR Subsidi</option>
									</select>
								</div>
								<div class="flex flex-direction-col flex-gap-small w-31">
									<div class="title-input-nup">Versi Pricelist</div>
									<input type="text" name="" class="input-nup" placeholder="pricelist.." bind:value={form.pricelist}>
								</div>
								<div class="flex flex-direction-col flex-gap-small w-31">
									<div class="title-input-nup">Harga Unit<span class="obligatory-input">*</span></div>
									<input type="text" name="" class="input-nup" placeholder="harga unit.." bind:value={form.harga_unit}>
								</div>
							</div>
							<div class="flex flex-direction-col flex-gap-semi-small">
								<div class="title-input-nup">Pilihan Unit</div>
								{#each Array(counterAlternatif) as _, index (index)}
									{#if index == 0}
										<div class="card-secondary flex flex-direction-col flex-gap-semi-large" id="">
											<div class="title-input-nup">Alternatif {index+1}</div>
											<div class="flex flex-gap-regular">
												<div class="flex flex-direction-col flex-gap-small w-48">
													<div class="title-input-nup">Perumahan<span class="obligatory-input">*</span></div>
													<select name="perumahan_{index}" class="select-nup" bind:value={form.perumahan_1}>
														{#each perumahanList as item, index}
															<option value="{item.nama[0] + item.nama.slice(1).toLowerCase()}">{item.nama[0] + item.nama.slice(1).toLowerCase()}</option>
														{/each}
													</select>
												</div>
												<div class="flex flex-direction-col flex-gap-small w-48">
													<div class="title-input-nup">Jenis Bangunan<span class="obligatory-input">*</span></div>
													<select class="select-nup" bind:value={form.jenis_bangunan_1}>
														<option value="Perumahan">Perumahan</option>
													</select>
												</div>
											</div>
											<div class="flex flex-gap-regular">
												<div class="flex flex-direction-col flex-gap-small w-20">
													<div class="title-input-nup">Blok<span class="obligatory-input">*</span></div>
													<select class="select-nup" bind:value={form.blok_1} on:change={() => {console.log("test")}}>
														{#each blokList as item, index}
															<option value="{item.blok[0] + item.blok.slice(1).toLowerCase()}">{item.blok[0] + item.blok.slice(1).toLowerCase()}</option>
														{/each}
													</select>
													<!-- <select class="select-nup" bind:value={form.blok}>
														<option value="AA2">AA2</option>
													</select> -->
												</div>
												<div class="flex flex-direction-col flex-gap-small w-20">
													<div class="title-input-nup">Nomor<span class="obligatory-input">*</span></div>
													<select class="select-nup" bind:value={form.nomor_1}>
														<option value="12">12</option>
													</select>
												</div>
												<div class="flex flex-direction-col flex-gap-small w-20">
													<div class="title-input-nup">Tipe</div>
													<input type="text" name="" class="input-nup" placeholder="tipe.." bind:value={form.tipe_1}>
												</div>
												<div class="flex flex-direction-col flex-gap-small w-20">
													<div class="title-input-nup">Lantai</div>
													<input type="text" name="" class="input-nup" placeholder="lantai.." bind:value={form.lantai_1}>
												</div>
												<div class="flex flex-direction-col flex-gap-small w-20">
													<div class="title-input-nup">Unit</div>
													<input type="text" name="" class="input-nup" placeholder="unit.." bind:value={form.unit_1}>
												</div>
											</div>
										</div>
									{:else}
										<div class="card-secondary flex flex-direction-col flex-gap-semi-large" id="">
											<div class="flex flex-between-horizontal flex-center-vertical">
												<div class="title-input-nup">Alternatif {index+1}</div>
												<button class="btn-fill-danger flex flex-center-vertical flex-gap-small" on:click={() => {
													counterAlternatif--;
												}}>Hapus Alternatif</button>
											</div>
											<div class="flex flex-gap-regular">
												<div class="flex flex-direction-col flex-gap-small w-48">
													<div class="title-input-nup">Perumahan<span class="obligatory-input">*</span></div>
													<select class="select-nup"  name="perumahan_{index}" bind:value={form["perumahan_"+counterAlternatif]}>
														{#each perumahanList as item, index}
															<option value="{item.nama[0] + item.nama.slice(1).toLowerCase()}">{item.nama[0] + item.nama.slice(1).toLowerCase()}</option>
														{/each}
													</select>
												</div>
												<div class="flex flex-direction-col flex-gap-small w-48">
													<div class="title-input-nup">Jenis Bangunan<span class="obligatory-input">*</span></div>
													<select class="select-nup" bind:value={form["jenis_bangunan_"+counterAlternatif]}>
														<option value="Perumahan">Perumahan</option>
													</select>
												</div>
											</div>
											<div class="flex flex-gap-regular">
												<div class="flex flex-direction-col flex-gap-small w-20">
													<div class="title-input-nup">Blok<span class="obligatory-input">*</span></div>
													<select class="select-nup" bind:value={form["blok_"+counterAlternatif]}>
														<option value="AA2">AA2</option>
													</select>
												</div>
												<div class="flex flex-direction-col flex-gap-small w-20">
													<div class="title-input-nup">Nomor<span class="obligatory-input">*</span></div>
													<select class="select-nup"bind:value={form["nomor_"+counterAlternatif]}>
														<option value="12">12</option>
													</select>
												</div>
												<div class="flex flex-direction-col flex-gap-small w-20">
													<div class="title-input-nup">Tipe</div>
													<input type="text" name="" class="input-nup" placeholder="tipe.." bind:value={form["tipe_"+counterAlternatif]}>
												</div>
												<div class="flex flex-direction-col flex-gap-small w-20">
													<div class="title-input-nup">Lantai</div>
													<input type="text" name="" class="input-nup" placeholder="lantai.." bind:value={form["lantai_"+counterAlternatif]}>
												</div>
												<div class="flex flex-direction-col flex-gap-small w-20">
													<div class="title-input-nup">Unit</div>
													<input type="text" name="" class="input-nup" placeholder="unit.." bind:value={form["unit_"+counterAlternatif]}>
												</div>
											</div>
										</div>
									{/if}
								{/each}
								<div class="flex flex-center-horizontal">
								<button class="btn-transparent flex flex-center-vertical flex-gap-small" on:click={() => {
									++counterAlternatif;
									form["perumahan_"+counterAlternatif] = ""
									form["blok_"+counterAlternatif] = ""
									form["nomor_"+counterAlternatif] = ""
									form["tipe_"+counterAlternatif] = ""
									form["lantai_"+counterAlternatif] = ""
									form["unit_"+counterAlternatif] = ""
									form["jenis_bangunan_"+counterAlternatif] = ""
								}}><img src="/images/icons/Plus_Blue.svg"> <span>Tambah Alternatif</span></button>
							</div>
							</div>
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
									<input type="text" name="" class="input-nup" placeholder=" nama.." bind:value={form.nama_client}>
								</div>
								<div class="flex flex-direction-col flex-gap-small w-40">
									<div class="title-input-nup">Jenis Kelamin<span class="obligatory-input">*</span></div>
									<select class="select-nup" bind:value={form.jenis_kelamin}>
										<option value="Pria">Pria</option>
										<option value="Wanita">Wanita</option>
									</select>
								</div>
							</div>
							<div class="flex flex-gap-regular">
								<div class="flex flex-direction-col flex-gap-small w-31">
									<div class="title-input-nup">Nomor KTP<span class="obligatory-input">*</span></div>
									<input type="text" name="" class="input-nup" placeholder=" nomor KTP.." bind:value={form.no_ktp}>
								</div>
								<div class="flex flex-direction-col flex-gap-small w-31">
									<div class="title-input-nup">Alamat Email</div>
									<input type="text" name="" class="input-nup" placeholder=" alamat email.." bind:value={form.email}>
								</div>
								<div class="flex flex-direction-col flex-gap-small w-31">
									<div class="title-input-nup">Nomor Telepon<span class="obligatory-input">*</span></div>
									<input type="text" name="" class="input-nup" placeholder=" nomor telepon.." bind:value={form.no_hp}>
								</div>
							</div>
							<div class="flex flex-gap-regular">
								<div class="flex flex-direction-col flex-gap-small w-31">
									<div class="title-input-nup">Status Pernikahan<span class="obligatory-input">*</span></div>
									<select class="select-nup" bind:value={form.status_menikah}>
										<option value="Sudah Menikah">Sudah Menikah</option>
										<option value="Belum Menikah">Belum Menikah</option>
									</select>
								</div>
							</div>
							<div class="flex flex-direction-col flex-gap-semi-small">
								<div class="title-input-nup">Alamat Lengkap (Korespondensi)</div>
								<div class="card-secondary flex flex-direction-col flex-gap-semi-large">
									<div class="flex flex-gap-regular">
										<div class="flex flex-direction-col flex-gap-small w-50">
											<div class="title-input-nup">Alamat Rumah<span class="obligatory-input">*</span></div>
											<input type="text" name="" class="input-nup" placeholder=" alamat rumah.." bind:value={form.alamat}>
										</div>
										<div class="flex flex-direction-col flex-gap-small w-25">
											<div class="title-input-nup">RT<span class="obligatory-input">*</span></div>
											<input type="text" name="" class="input-nup" placeholder=" RT.." bind:value={form.rt}>
										</div>
										<div class="flex flex-direction-col flex-gap-small w-25">
											<div class="title-input-nup">RW<span class="obligatory-input">*</span></div>
											<input type="text" name="" class="input-nup" placeholder=" RW.." bind:value={form.rw}>
										</div>
									</div>
									<div class="flex flex-gap-regular">
										<div class="flex flex-direction-col flex-gap-small w-31">
											<div class="title-input-nup">Kelurahan<span class="obligatory-input">*</span></div>
											<input type="text" name="" class="input-nup" placeholder=" kelurahan.." bind:value={form.kelurahan}>
										</div>
										<div class="flex flex-direction-col flex-gap-small w-31">
											<div class="title-input-nup">Kecamatan<span class="obligatory-input">*</span></div>
											<input type="text" name="" class="input-nup" placeholder=" kecamatan.." bind:value={form.kecamatan}>
										</div>
										<div class="flex flex-direction-col flex-gap-small w-31">
											<div class="title-input-nup">Kabupaten/Kota<span class="obligatory-input">*</span></div>
											<input type="text" name="" class="input-nup" placeholder=" kabupaten/kota.." bind:value={form.kabupaten}>
										</div>
									</div>
									<div class="flex flex-gap-regular">
										<div class="flex flex-direction-col flex-gap-small w-40">
											<div class="title-input-nup">Provinsi<span class="obligatory-input">*</span></div>
											<select class="select-nup" bind:value={form.provinsi}>
												{#each provinsiList as item, index}
													<option value="{item.provinsi[0] + item.provinsi.slice(1).toLowerCase()}">{item.provinsi[0] + item.provinsi.slice(1).toLowerCase()}</option>
												{/each}
											</select>
										</div>
										<div class="flex flex-direction-col flex-gap-small w-30">
											<div class="title-input-nup">Kode Pos<span class="obligatory-input">*</span></div>
											<input type="text" name="" class="input-nup" placeholder=" kode pos.." bind:value={form.kode_pos}>
										</div>
									</div>
								</div>
								<div class="title-input-nup">Pekerjaan</div>
								<div class="card-secondary flex flex-direction-col flex-gap-semi-large">
									<div class="flex flex-gap-regular">
										<div class="flex flex-direction-col flex-gap-small w-50">
											<div class="title-input-nup">Nama Pekerjaan<span class="obligatory-input">*</span></div>
											<input type="text" name="" class="input-nup" placeholder=" nama pekerjaan.." bind:value={form.pekerjaan}>
										</div>
										<div class="flex flex-direction-col flex-gap-small w-50">
											<div class="title-input-nup">Koordinat Lokasi Usaha<span class="obligatory-input">*</span></div>
											<input type="text" name="" class="input-nup" placeholder=" koordinat lokasi usaha.." bind:value={form.koordinat_usaha}>
										</div>
									</div>
									<div class="flex flex-gap-regular">
										<div class="flex flex-direction-col flex-gap-small w-50">
											<div class="title-input-nup">Nomor NPWP<span class="obligatory-input">*</span></div>
											<input type="text" name="" class="input-nup" placeholder=" nomor NPWP.." bind:value={form.npwp}>
										</div>
									</div>
								</div>
								<div class="title-input-nup">Unggah Berkas</div>
								<div class="card-secondary flex flex-direction-col flex-gap-semi-large">
									<div class="flex flex-gap-regular">
										<div class="flex flex-direction-col flex-gap-small w-48">
											<div class="title-input-nup">Foto KTP<span class="obligatory-input">*</span></div>
											<input type="file" class="file-nup" bind:files={form.fc_ktp}>
										</div>
										<div class="flex flex-direction-col flex-gap-small w-48">
											<div class="title-input-nup">Fotokopi KK<span class="obligatory-input">*</span></div>
											<input type="file" class="file-nup" bind:files={form.fc_kk}>
										</div>
									</div>
									<div class="flex flex-gap-regular">
										<div class="flex flex-direction-col flex-gap-small w-48">
											<div class="title-input-nup">Fotokopi NPWP<span class="obligatory-input">*</span></div>
											<input type="file" class="file-nup" bind:files={form.fc_npwp}>
										</div>
										<div class="flex flex-direction-col flex-gap-small w-48">
											<div class="title-input-nup">Pas Foto Pemesan<span class="obligatory-input">*</span></div>
											<input type="file" class="file-nup" bind:files={form.pas_photo}>
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
									<input type="text" name="" class="input-nup" placeholder=" nama.." bind:value={form.nama_pasangan}>
								</div>
								<div class="flex flex-direction-col flex-gap-small w-40">
									<div class="title-input-nup">Nomor KTP</div>
									<input type="text" name="" class="input-nup" placeholder=" nomor KTP.." bind:value={form.no_ktp_pasangan}>
								</div>
							</div>
							<div class="flex flex-direction-col flex-gap-semi-small">
								<div class="title-input-nup">Unggah Berkas</div>
								<div class="card-secondary flex flex-direction-col flex-gap-semi-large">
									<div class="flex flex-gap-regular">
										<div class="flex flex-direction-col flex-gap-small w-48">
											<div class="title-input-nup">Foto KTP</div>
											<input type="file" class="file-nup" bind:files={form.fc_ktp_pasangan}>
										</div>
										<div class="flex flex-direction-col flex-gap-small w-48">
											<div class="title-input-nup">Pas Foto Pasangan</div>
											<input type="file" class="file-nup" bind:files={form.pas_photo_pasangan}>
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
									<select class="select-nup" bind:value={form.bank}>
										<option value="Bank Mandiri">Bank Mandiri</option>
									</select>
								</div>
								<div class="flex flex-direction-col flex-gap-small w-40">
									<div class="title-input-nup">Nomor Rekening</div>
									<input type="text" name="" class="input-nup" placeholder="nomor rekening.." bind:value={form.no_rek}>
								</div>
							</div>
							<div class="flex flex-gap-regular">
								<div class="flex flex-direction-col flex-gap-small w-60">
									<div class="title-input-nup">Nama di Rekening Bank</div>
									<input type="text" name="" class="input-nup" placeholder="nama di rekening bank.." bind:value={form.nama_rekening}>
								</div>
								<div class="flex flex-direction-col flex-gap-small w-40">
									<div class="title-input-nup">Cabang Bank</div>
									<input type="text" name="" class="input-nup" placeholder="cabang bank.." bind:value={form.cabang_bank}>
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
									<select class="select-nup" bind:value={form.bi_status}>
										<option value="Ya">Ya</option>
									</select>
								</div>
							</div>
							<div class="flex flex-gap-regular">
								<div class="flex flex-direction-col flex-gap-small w-31">
									<div class="title-input-nup">Nama Referensi</div>
									<input type="text" name="" class="input-nup" placeholder="nama referensi.." bind:value={form.nama_referensi}>
								</div>
								<div class="flex flex-direction-col flex-gap-small w-31">
									<div class="title-input-nup">Tanggal Pengajuan</div>
									<input type="date" name="" class="input-nup" bind:value={form.tanggal_pengajuan}>
								</div>
								<div class="flex flex-direction-col flex-gap-small w-31">
									<div class="title-input-nup">Tanggal Hasil BI Checking</div>
									<input type="date" name="" class="input-nup" bind:value={form.tanggal_hasil}>
								</div>
							</div>
							<div class="flex flex-gap-regular">
								<div class="flex flex-direction-col flex-gap-small w-50">
									<div class="title-input-nup">Hasil BI Checking</div>
									<input type="text" name="" class="input-nup" placeholder="nama referensi.." bind:value={form.hasil_bi}>
								</div>
								<div class="flex flex-direction-col flex-gap-small w-50">
									<div class="title-input-nup">Hasil BI Checking Pasangan</div>
									<input type="text" name="" class="input-nup" placeholder="nama referensi.." bind:value={form.hasil_bi_pasangan}>
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
									<input type="text" name="" class="input-nup" placeholder=" lead marketing.." bind:value={form.booking_fee}>
								</div>
								<div class="flex flex-direction-col flex-gap-small w-40">
									<div class="title-input-nup">Metode Pembayaran</div>
									<select class="select-nup" bind:value={form.metode_pembayaran}>
										<option value="Transfer">Transfer</option>
									</select>
								</div>
							</div>
							<div class="flex flex-direction-col flex-gap-semi-small">
								<div class="title-input-nup">Unggah Berkas</div>
								<div class="card-secondary flex flex-direction-col flex-gap-semi-large">
									<div class="flex flex-gap-regular">
										<div class="flex flex-direction-col flex-gap-small w-48">
											<div class="title-input-nup">Fotokopi Stuk Pembayaran/Bukti Transfer</div>
											<input type="file" class="file-nup" bind:files={form.dokumen_pembayaran}>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="flex flex-end-horizontal w-70">
						<div class="w-40 flex flex-gap-regular flex-end-horizontal">
							<button class="btn-outline flex flex-center-vertical flex-gap-small"><span>Batal</span></button>
							<button class="btn-fill flex flex-center-vertical flex-gap-small" on:click={() => {handleSubmit()}}><span>Simpan NUP</span></button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>