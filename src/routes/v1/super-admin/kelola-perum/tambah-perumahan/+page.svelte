<script type="text/javascript">
	import Sidebar from '../../../../../components/sidebar.svelte'
	import Navbar from '../../../../../components/navbar.svelte'
	import { onMount } from 'svelte';
	import {fly, scale} from 'svelte/transition'

	import ApiController from '../../../../../ApiController'
	
	let form= {
		kode: '',
		nama: '',
		alamat: '',
		provinsi: '',
		kodepos: '',
		telepon: '',
		fax: '',
		foto: null,
		foto_siteplan: null
	};
	
	function handleSubmit() {
		const formData = new FormData();
		formData.append('kode', form.kode);
		formData.append('nama', form.nama);
		formData.append('alamat', form.alamat);
		formData.append('provinsi', form.provinsi);
		formData.append('kodepos', form.kodepos);
		formData.append('telepon', form.telepon);
		formData.append('fax', form.fax);
		formData.append('foto', form.foto);
		formData.append('foto_siteplan', form.foto_siteplan);

		let postPerumahan = () => {
			ApiController({
				method: "POST",
				endpoint: `perumahan/add`,
				datas: formData
			}).then(response => {
				console.log(response)
				window.location.href = '/v1/super-admin/kelola-perum'
			})
		}
		postPerumahan()
	}
	
</script>

<div id="after-login-layout">
	<Navbar/>
	<div class="flex">
		<Sidebar statusPointer="KelolaPerum" pagePointer="admin"/>
		<div class="w-80 content">
			<div class="flex flex-direction-col flex-gap-large" in:fly={{ y: -20, duration: 600 }}>
				<div class="flex flex-direction-col flex-gap-semi-large w-100">
					<div class="flex flex-direction-col flex-gap-semi-small w-100">
						<div class="title-content">Tambah Perumahan</div>
						<div class="flex flex-gap-regular flex-center-vertical">
							<div class="text-breadcrumb">Kelola Perum</div>
							<img src="/images/icons/Arrow_Right.svg">
							<div class="text-breadcrumb-active">Tambah</div>
						</div>
					</div>
					<div class="card w-60">
						<div class="flex flex-direction-col flex-gap-semi-large">
							<div class="flex flex-center-vertical">
								<div class="title-card-tambah-nup">Informasi Perumahan</div>
							</div>
							<div class="flex flex-gap-regular">
								<div class="flex flex-direction-col flex-gap-small w-60">
									<div class="title-input-nup">Nama Perumahan</div>
									<input type="text" name="" class="input-nup" placeholder="nama perumahan.." bind:value={form.nama} required />
								</div>
								<div class="flex flex-direction-col flex-gap-small w-40">
									<div class="title-input-nup">Singkatan Perumahan</div>
									<input type="text" name="" class="input-nup" placeholder="singkatan perumahan.." bind:value={form.kode} required />
								</div>
							</div>
							<div class="flex flex-gap-regular">
								<div class="flex flex-direction-col flex-gap-small w-100">
									<div class="title-input-nup">Alamat Perumahan</div>
									<input type="text" name="" class="input-nup" placeholder="alamat perumahan.." bind:value={form.alamat} required />
								</div>
							</div>
							<div class="flex flex-gap-regular">
								<div class="flex flex-direction-col flex-gap-small w-60">
									<div class="title-input-nup">Provinsi</div>
									<input type="text" name="" class="input-nup" placeholder="alamat provinsi.." bind:value={form.provinsi} required />
								</div>
								<div class="flex flex-direction-col flex-gap-small w-40">
									<div class="title-input-nup">Kode Pos</div>
									<input type="text" name="" class="input-nup" placeholder="kode pos.." bind:value={form.kodepos} required />
								</div>
							</div>
							<div class="flex flex-gap-regular">
								<div class="flex flex-direction-col flex-gap-small w-50">
									<div class="title-input-nup">Telepon</div>
									<input type="text" name="" class="input-nup" placeholder="telepon.." bind:value={form.telepon} required />
								</div>
								<div class="flex flex-direction-col flex-gap-small w-50">
									<div class="title-input-nup">Fax</div>
									<input type="text" name="" class="input-nup" placeholder="fax.." bind:value={form.fax} required />
								</div>
							</div>
							<div class="flex flex-gap-regular">
								<div class="flex flex-direction-col flex-gap-small w-48">
									<div class="title-input-nup">Gambar Perumahan</div>
									<input type="file" class="file-nup" bind:files={form.foto} required />
								</div>
								<div class="flex flex-direction-col flex-gap-small w-48">
									<div class="title-input-nup">Site Plan</div>
									<input type="file" class="file-nup" bind:files={form.foto_siteplan} required />
								</div>
							</div>
						</div>
					</div>
					<div class="flex flex-end-horizontal w-60">
						<div class="w-50 flex flex-gap-regular flex-end-horizontal">
							<button class="btn-outline flex flex-center-vertical flex-gap-small"><span>Batal</span></button>
							<button class="btn-fill flex flex-center-vertical flex-gap-small" on:click={handleSubmit}><span>Simpan Perumahan</span></button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>