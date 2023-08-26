<script type="text/javascript">
	import Sidebar from '../../../../../components/sidebar.svelte'
	import Navbar from '../../../../../components/navbar.svelte'
	import { onMount } from 'svelte';
	import {fly, scale} from 'svelte/transition'
	import ApiController from '../../../../../ApiController'

	let sign = null
	let files;
	
	let form= {
		nama_penandatangan: '',
		jabatan: '',
		tanda_tangan: null,
	};

	let getDetailSign = () => {
		ApiController({
			method: "GET",
			endpoint: `sign`
		}).then(response => {
			sign = response.data.data
			console.log(sign)
		})
	}

	function sendProgress() {
		const formData = new FormData();
		formData.append('nama_penandatangan', form.nama_penandatangan)
		formData.append('jabatan', form.jabatan)
		formData.append('tanda_tangan', files[0])

		console.log(form.nama_penandatangan)
		console.log(form.jabatan)
		console.log(files[0])
		let postProgress = () => {
			ApiController({
				method: "POST",
				endpoint: `sign/add`,
				datas: formData
			}).then(response => {
				console.log(response)
				location.reload();
			})
		}
		postProgress()	
	}

	onMount(() => {
		getDetailSign();
	})
</script>

<div id="after-login-layout">
	<Navbar/>
	<div class="flex">
		<Sidebar statusPointer="Approval" pagePointer="admin"/>
		<div class="w-80 content">
			<div class="flex flex-direction-col flex-gap-large" in:fly={{ y: -20, duration: 600 }}>
				<div class="flex flex-direction-col flex-gap-semi-large w-100">
					<div class="flex flex-direction-col flex-gap-semi-small w-100">
						<div class="title-content">Kelola Tanda Tangan</div>
						<div class="flex flex-gap-regular flex-center-vertical">
							<div class="text-breadcrumb">Approval</div>
							<img src="/images/icons/Arrow_Right.svg">
							<div class="text-breadcrumb-active">Kelola Tanda Tangan</div>
						</div>
					</div>
					<div class="card w-70 padding-progress">
						<div class="flex flex-direction-col flex-gap-regular">
							<div class="title-card-progress">Tanda Tangan Baru</div>
							<div class="flex flex-direction-col flex-gap-semi-small">
								<div class="card-secondary flex flex-direction-col flex-gap-semi-large">
									<div class="flex flex-gap-regular">
										<div class="flex flex-direction-col flex-gap-small w-50">
											<div class="title-input-nup">Nama</div>
											<input type="text" name="" class="input-nup"  placeholder="Nama" bind:value={form.nama_penandatangan}>
										</div>
										<div class="flex flex-direction-col flex-gap-small w-50">
											<div class="title-input-nup">Jabatan</div>
											<input type="text" name="" class="input-nup"  placeholder="Jabatan" bind:value={form.jabatan}>
										</div>
									</div>
									<div class="flex flex-gap-regular">
										<div class="flex flex-direction-col flex-gap-small w-100">
											<div class="title-input-nup">Berkas Tanda Tangan</div>
											<div class="card-secondary flex flex-direction-col flex-gap-regular w-100">
												<input type="file" name="" class="file-nup" bind:files>
												<div class="flex flex-direction-col flex-gap-regular caption-card-detail">
													<ul>
														<li>Format PNG</li>
														<li>Gambar tidak memiliki background</li>
														<li>Tanda tangan terlihat jelas</li>
													</ul>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="flex flex-end-horizontal w-70">
						<div class="w-60 flex flex-gap-regular flex-end-horizontal">
							<button class="btn-outline flex flex-center-vertical flex-gap-small" on:click={() => {
								history.back();
							}}><span>Batal</span></button>
							<button class="btn-fill flex flex-center-vertical flex-gap-small" on:click={sendProgress}><span>Simpan Tanda Tangan</span></button>
						</div>
					</div>
					<div class="scroll-x flex flex-direction-col flex-gap-regular w-70">
						<div class="card-head w-100 height-fit">
							<div class="flex">
								<div class="flex flex-gap-small flex-center-vertical w-10 border-separate">
									<div class="text-drop-card">No</div>
									<img src="/images/icons/Arrow.svg">
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-30 border-separate">
									<div class="text-drop-card">Nama</div>
									<img src="/images/icons/Arrow.svg">
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-30 border-separate">
									<div class="text-drop-card">Jabatan</div>
									<img src="/images/icons/Arrow.svg">
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-20 border-separate">
									<div class="text-drop-card">Berkas</div>
									<img src="/images/icons/Arrow.svg">
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-10 border-non-separate">
									<div class="text-drop-card">Aksi</div>
									<img src="/images/icons/Arrow.svg">
								</div>
							</div>
						</div>
						{#if sign}
							{#each sign as s, index}
								<div class="card-head w-100 height-fit">
									<div class="flex">
										<div class="flex flex-gap-small flex-center-vertical w-10 no-border-table">
											<div class="text-drop-card">{index+1}</div>
										</div>
										<div class="flex flex-gap-small flex-center-vertical w-30 no-border-table">
											<div class="text-drop-card">{s.nama_penandatangan}</div>
										</div>
										<div class="flex flex-gap-small flex-center-vertical w-30 no-border-table">
											<div class="text-drop-card">{s.jabatan}</div>
										</div>
										<div class="flex flex-gap-small flex-center-vertical w-20 no-border-table">
											<a href="{s.tanda_tangan}" class="no-decor link-detail">lihat</a>
										</div>
										<div class="flex flex-gap-small flex-center-vertical w-10 no-border-table">
											<a href="/v1/super-admin/kelola-perum/detail-perumahan/edit-blok" class="no-decor"><img src="/images/icons/Edit.svg"></a>
											<img src="/images/icons/Delete.svg">
										</div>
									</div>
								</div>
							{/each}
						{/if}
					</div>
					<div class="card w-70 height-fit">
						<div class="flex flex-between-horizontal">
							<div class="flex flex-gap-regular flex-center-vertical">
								<div class="text-display-sort">Menampilkan</div>
								<select class="select-sort">
									<option>10</option>
								</select>
								<div class="text-display-sort">dari <span class="bold-number">2</span> data unit</div>
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