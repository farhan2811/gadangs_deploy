<script type="text/javascript">
	import Sidebar from '../../../../../../../components/sidebar.svelte'
	import Navbar from '../../../../../../../components/navbar.svelte'
	import { onMount } from 'svelte';
	import {fly, scale} from 'svelte/transition'
	import ApiController from '../../../../../../../ApiController'

	let idUnitTemp;
	let idUnitReal;
	
	let form= {
		progress_siteplan: false,
		keterangan_siteplan: '',
		tanggal_target_siteplan: '',
		tanggal_mulai_siteplan: '',
		tanggal_selesai_siteplan: '',
		progress_induk_sertifikat: false,
		keterangan_induk_sertifikat: '',
		tanggal_target_induk_sertifikat: '',
		tanggal_mulai_induk_sertifikat: '',
		tanggal_selesai_induk_sertifikat: '',
		progress_sps_sertifikat: false,
		keterangan_sps_sertifikat: '',
		tanggal_target_sps_sertifikat: '',
		tanggal_mulai_sps_sertifikat: '',
		tanggal_selesai_sps_sertifikat: '',
		progress_splitzing_sertifikat: false,
		keterangan_splitzing_sertifikat: '',
		tanggal_target_splitzing_sertifikat: '',
		tanggal_mulai_splitzing_sertifikat: '',
		tanggal_selesai_splitzing_sertifikat: '',
		progress_induk_img: false,
		keterangan_induk_img: '',
		tanggal_target_induk_img: '',
		tanggal_mulai_induk_img: '',
		tanggal_selesai_induk_img: '',
		progress_splitzing_img: false,
		keterangan_splitzing_img: '',
		tanggal_target_splitzing_img: '',
		tanggal_mulai_splitzing_img: '',
		tanggal_selesai_splitzing_img: ''
	};

	function sendProgress() {
		const formData = new FormData();
		formData.append('progress_siteplan',form.progress_siteplan)
		formData.append('keterangan_siteplan', form.keterangan_siteplan)
		formData.append('tanggal_target_siteplan', form.tanggal_target_siteplan)
		formData.append('tanggal_mulai_siteplan', form.tanggal_mulai_siteplan)
		formData.append('tanggal_selesai_siteplan', form.tanggal_selesai_siteplan)
		formData.append('progress_induk_sertifikat', form.progress_induk_sertifikat)
		formData.append('keterangan_induk_sertifikat', form.keterangan_induk_sertifikat)
		formData.append('tanggal_target_induk_sertifikat', form.tanggal_target_induk_sertifikat)
		formData.append('tanggal_mulai_induk_sertifikat', form.tanggal_mulai_induk_sertifikat)
		formData.append('tanggal_selesai_induk_sertifikat', form.tanggal_selesai_induk_sertifikat)
		formData.append('progress_sps_sertifikat', form.progress_sps_sertifikat)
		formData.append('keterangan_sps_sertifikat', form.keterangan_sps_sertifikat)
		formData.append('tanggal_target_sps_sertifikat', form.tanggal_target_sps_sertifikat)
		formData.append('tanggal_mulai_sps_sertifikat', form.tanggal_mulai_sps_sertifikat)
		formData.append('tanggal_selesai_sps_sertifikat', form.tanggal_selesai_sps_sertifikat)
		formData.append('progress_splitzing_sertifikat', form.progress_splitzing_sertifikat)
		formData.append('keterangan_splitzing_sertifikat', form.keterangan_splitzing_sertifikat)
		formData.append('tanggal_target_splitzing_sertifikat',form.tanggal_target_splitzing_sertifikat)
		formData.append('tanggal_mulai_splitzing_sertifikat', form.tanggal_mulai_splitzing_sertifikat)
		formData.append('tanggal_selesai_splitzing_sertifikat', form.tanggal_selesai_splitzing_sertifikat)
		formData.append('progress_induk_img', form.progress_induk_img)
		formData.append('keterangan_induk_img', form.keterangan_induk_img)
		formData.append('tanggal_target_induk_img', form.tanggal_target_induk_img)
		formData.append('tanggal_mulai_induk_img', form.tanggal_mulai_induk_img)
		formData.append('tanggal_selesai_induk_img', form.tanggal_selesai_induk_img)
		formData.append('progress_splitzing_img', form.progress_splitzing_img)
		formData.append('keterangan_splitzing_img', form.keterangan_splitzing_img)
		formData.append('tanggal_target_splitzing_img', form.tanggal_target_splitzing_img)
		formData.append('tanggal_mulai_splitzing_img', form.tanggal_mulai_splitzing_img)
		formData.append('tanggal_selesai_splitzing_img', form.tanggal_selesai_splitzing_img)

		let postProgress = () => {
			ApiController({
				method: "POST",
				endpoint: `legal/unit/${idUnitReal}/atur-progress`,
				datas: formData
			}).then(response => {
				console.log(response)
				history.back();
			})
		}
		postProgress()	
	}

	onMount(() => {
		idUnitTemp = window.location.href.slice(45);
		idUnitReal = idUnitTemp.replace(/\D/g, "");
	})
</script>

<div id="after-login-layout">
	<Navbar/>
	<div class="flex">
		<Sidebar statusPointer="Unit" pagePointer="legal"/>
		<div class="w-80 content">
			<div class="flex flex-direction-col flex-gap-large" in:fly={{ y: -20, duration: 600 }}>
				<div class="flex flex-direction-col flex-gap-semi-large w-100">
					<div class="flex flex-direction-col flex-gap-semi-small w-100">
						<div class="title-content">Atur Progress</div>
						<div class="flex flex-gap-regular flex-center-vertical">
							<div class="text-breadcrumb">Data Unit</div>
							<img src="/images/icons/Arrow_Right.svg">
							<div class="text-breadcrumb-active">Atur Progress</div>
						</div>
					</div>
					<div class="card w-70 padding-progress">
						<div class="flex flex-direction-col flex-gap-regular">
							<div class="title-card-progress">Pengesahan</div>
							<div class="flex flex-direction-col flex-gap-semi-small">
								<div class="title-input-progress">Siteplan</div>
								<div class="card-secondary flex flex-direction-col flex-gap-semi-large">
									<div class="flex flex-gap-regular">
										<div class="flex flex-direction-col flex-gap-small w-31">
											<div class="title-input-nup">Tanggal Mulai</div>
											<input type="date" name="" class="input-nup" bind:value={form.tanggal_mulai_siteplan}>
										</div>
										<div class="flex flex-direction-col flex-gap-small w-31">
											<div class="title-input-nup">Tanggal Target</div>
											<input type="date" name="" class="input-nup" bind:value={form.tanggal_target_siteplan}>
										</div>
										<div class="flex flex-direction-col flex-gap-small w-31">
											<div class="title-input-nup">Tanggal Selesai</div>
											<input type="date" name="" class="input-nup" bind:value={form.tanggal_selesai_siteplan}>
										</div>
									</div>
									<div class="flex flex-gap-regular">
										<div class="flex flex-direction-col flex-gap-small w-100">
											<div class="title-input-nup">Keterangan</div>
											<textarea class="input-nup textarea-spec" placeholder="keterangan.." bind:value={form.keterangan_siteplan}></textarea>
										</div>
									</div>
									<div class="flex flex-gap-small">
										<input type="checkbox" name="" bind:checked={form.progress_siteplan}>
										<div class="title-input-nup">Tandai sebagai selesai</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="card w-70 padding-progress">
						<div class="flex flex-direction-col flex-gap-regular">
							<div class="title-card-progress">Sertifikat</div>
							<div class="flex flex-direction-col flex-gap-semi-small">
								<div class="title-input-progress">Induk</div>
								<div class="card-secondary flex flex-direction-col flex-gap-semi-large">
									<div class="flex flex-gap-regular">
										<div class="flex flex-direction-col flex-gap-small w-31">
											<div class="title-input-nup">Tanggal Mulai</div>
											<input type="date" name="" class="input-nup" bind:value={form.tanggal_mulai_induk_sertifikat}>
										</div>
										<div class="flex flex-direction-col flex-gap-small w-31">
											<div class="title-input-nup">Tanggal Target</div>
											<input type="date" name="" class="input-nup" bind:value={form.tanggal_target_induk_sertifikat}>
										</div>
										<div class="flex flex-direction-col flex-gap-small w-31">
											<div class="title-input-nup">Tanggal Selesai</div>
											<input type="date" name="" class="input-nup" bind:value={form.tanggal_selesai_induk_sertifikat}>
										</div>
									</div>
									<div class="flex flex-gap-regular">
										<div class="flex flex-direction-col flex-gap-small w-100">
											<div class="title-input-nup">Keterangan</div>
											<textarea class="input-nup textarea-spec" placeholder="keterangan.." bind:value={form.keterangan_induk_sertifikat}></textarea>
										</div>
									</div>
									<div class="flex flex-gap-small">
										<input type="checkbox" name="" bind:checked={form.progress_induk_sertifikat}>
										<div class="title-input-nup">Tandai sebagai selesai</div>
									</div>
								</div>
							</div>
							<div class="flex flex-direction-col flex-gap-semi-small">
								<div class="title-input-progress">SPS</div>
								<div class="card-secondary flex flex-direction-col flex-gap-semi-large">
									<div class="flex flex-gap-regular">
										<div class="flex flex-direction-col flex-gap-small w-31">
											<div class="title-input-nup">Tanggal Mulai</div>
											<input type="date" name="" class="input-nup" bind:value={form.tanggal_mulai_sps_sertifikat}>
										</div>
										<div class="flex flex-direction-col flex-gap-small w-31">
											<div class="title-input-nup">Tanggal Target</div>
											<input type="date" name="" class="input-nup" bind:value={form.tanggal_target_sps_sertifikat}>
										</div>
										<div class="flex flex-direction-col flex-gap-small w-31">
											<div class="title-input-nup">Tanggal Selesai</div>
											<input type="date" name="" class="input-nup" bind:value={form.tanggal_selesai_sps_sertifikat}>
										</div>
									</div>
									<div class="flex flex-gap-regular">
										<div class="flex flex-direction-col flex-gap-small w-100">
											<div class="title-input-nup">Keterangan</div>
											<textarea class="input-nup textarea-spec" placeholder="keterangan.." bind:value={form.keterangan_sps_sertifikat}></textarea>
										</div>
									</div>
									<div class="flex flex-gap-small">
										<input type="checkbox" name="" bind:checked={form.progress_sps_sertifikat}>
										<div class="title-input-nup">Tandai sebagai selesai</div>
									</div>
								</div>
							</div>
							<div class="flex flex-direction-col flex-gap-semi-small">
								<div class="title-input-progress">Splitzing</div>
								<div class="card-secondary flex flex-direction-col flex-gap-semi-large">
									<div class="flex flex-gap-regular">
										<div class="flex flex-direction-col flex-gap-small w-31">
											<div class="title-input-nup">Tanggal Mulai</div>
											<input type="date" name="" class="input-nup" bind:value={form.tanggal_mulai_splitzing_sertifikat}>
										</div>
										<div class="flex flex-direction-col flex-gap-small w-31">
											<div class="title-input-nup">Tanggal Target</div>
											<input type="date" name="" class="input-nup" bind:value={form.tanggal_target_splitzing_sertifikat}>
										</div>
										<div class="flex flex-direction-col flex-gap-small w-31">
											<div class="title-input-nup">Tanggal Selesai</div>
											<input type="date" name="" class="input-nup" bind:value={form.tanggal_selesai_splitzing_sertifikat}>
										</div>
									</div>
									<div class="flex flex-gap-regular">
										<div class="flex flex-direction-col flex-gap-small w-100">
											<div class="title-input-nup">Keterangan</div>
											<textarea class="input-nup textarea-spec" placeholder="keterangan.." bind:value={form.keterangan_splitzing_sertifikat}></textarea>
										</div>
									</div>
									<div class="flex flex-gap-small">
										<input type="checkbox" name="" bind:checked={form.progress_splitzing_sertifikat}>
										<div class="title-input-nup">Tandai sebagai selesai</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="card w-70 padding-progress">
						<div class="flex flex-direction-col flex-gap-regular">
							<div class="title-card-progress">IMB/PBG</div>
							<div class="flex flex-direction-col flex-gap-semi-small">
								<div class="title-input-progress">Induk</div>
								<div class="card-secondary flex flex-direction-col flex-gap-semi-large">
									<div class="flex flex-gap-regular">
										<div class="flex flex-direction-col flex-gap-small w-31">
											<div class="title-input-nup">Tanggal Mulai</div>
											<input type="date" name="" class="input-nup" bind:value={form.tanggal_mulai_induk_img}>
										</div>
										<div class="flex flex-direction-col flex-gap-small w-31">
											<div class="title-input-nup">Tanggal Target</div>
											<input type="date" name="" class="input-nup" bind:value={form.tanggal_target_induk_img}>
										</div>
										<div class="flex flex-direction-col flex-gap-small w-31">
											<div class="title-input-nup">Tanggal Selesai</div>
											<input type="date" name="" class="input-nup" bind:value={form.tanggal_selesai_induk_img}>
										</div>
									</div>
									<div class="flex flex-gap-regular">
										<div class="flex flex-direction-col flex-gap-small w-100">
											<div class="title-input-nup">Keterangan</div>
											<textarea class="input-nup textarea-spec" placeholder="keterangan.." bind:value={form.keterangan_induk_img}></textarea>
										</div>
									</div>
									<div class="flex flex-gap-small">
										<input type="checkbox" name="" bind:checked={form.progress_induk_img}>
										<div class="title-input-nup">Tandai sebagai selesai</div>
									</div>
								</div>
							</div>
							<div class="flex flex-direction-col flex-gap-semi-small">
								<div class="title-input-progress">Splitzing</div>
								<div class="card-secondary flex flex-direction-col flex-gap-semi-large">
									<div class="flex flex-gap-regular">
										<div class="flex flex-direction-col flex-gap-small w-31">
											<div class="title-input-nup">Tanggal Mulai</div>
											<input type="date" name="" class="input-nup" bind:value={form.tanggal_mulai_splitzing_img}>
										</div>
										<div class="flex flex-direction-col flex-gap-small w-31">
											<div class="title-input-nup">Tanggal Target</div>
											<input type="date" name="" class="input-nup" bind:value={form.tanggal_target_splitzing_img}>
										</div>
										<div class="flex flex-direction-col flex-gap-small w-31">
											<div class="title-input-nup">Tanggal Selesai</div>
											<input type="date" name="" class="input-nup" bind:value={form.tanggal_selesai_splitzing_img}>
										</div>
									</div>
									<div class="flex flex-gap-regular">
										<div class="flex flex-direction-col flex-gap-small w-100">
											<div class="title-input-nup">Keterangan</div>
											<textarea class="input-nup textarea-spec" placeholder="keterangan.." bind:value={form.keterangan_splitzing_img}></textarea>
										</div>
									</div>
									<div class="flex flex-gap-small">
										<input type="checkbox" name="" bind:checked={form.progress_splitzing_img}>
										<div class="title-input-nup">Tandai sebagai selesai</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="flex flex-end-horizontal w-70">
						<div class="w-40 flex flex-gap-regular flex-end-horizontal">
							<button class="btn-outline flex flex-center-vertical flex-gap-small" on:click={() => {
								hitory.back();
							}}><span>Batal</span></button>
							<button class="btn-fill flex flex-center-vertical flex-gap-small" on:click={sendProgress}><span>Simpan Progress</span></button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>