<script type="text/javascript">
	import Sidebar from '../../../../../../../components/sidebar.svelte'
	import Navbar from '../../../../../../../components/navbar.svelte'
	import { onMount } from 'svelte';
	import {fly, scale} from 'svelte/transition'
	import ApiController from '../../../../../../../ApiController'

	let idUnitTemp;
	let idUnitReal;
	let completeData;
	let nama_progress = '';
	
	let form= {
		progress: false,
		keterangan: '',
		tanggal_target: '',
		tanggal_mulai: '',
		tanggal_selesai: '',
		berkas: null
	};

	let getDetailData = () => {
		ApiController({
			method: 'GET',
			endpoint: `progress/detail-progress/${idUnitReal}`
		}).then(response => {
			completeData = response.data.data
			if (completeData.nama_progress == "Air") {
				nama_progress = completeData.nama_progress
				console.log(nama_progress)
			} 
			else if (completeData.nama_progress == "SLO") {
				nama_progress = completeData.nama_progress
				console.log(nama_progress)
			} 
			else if (completeData.nama_progress == "BP") {
				nama_progress = completeData.nama_progress
				console.log(nama_progress)
			} 
			else if (completeData.nama_progress == "KWH Listrik") {
				nama_progress = completeData.nama_progress
				console.log(nama_progress)
			} 
			else if (completeData.nama_progress == "Makadam" || completeData.nama_progress == "Cor") {
				nama_progress = completeData.nama_progress
				console.log(nama_progress)
			} 
			else if (completeData.nama_progress == "Drainase") {
				nama_progress = completeData.nama_progress
				console.log(nama_progress)
			}
			else if (completeData.nama_progress == "SSB") {
				nama_progress = completeData.nama_progress
				console.log(nama_progress)
			}
			else if (completeData.nama_progress == "FLPP") {
				nama_progress = completeData.nama_progress
				console.log(nama_progress)
			}
		})
	}

	function sendProgress() {
		const formData = new FormData();
		formData.append('nama_progress', nama_progress)
		formData.append('progress',form.progress)
		formData.append('keterangan', form.keterangan)
		formData.append('berkas', form.berkas)
		formData.append('tanggal_target', form.tanggal_target)
		formData.append('tanggal_mulai', form.tanggal_mulai)
		formData.append('tanggal_selesai', form.tanggal_selesai)

		let postProgress = () => {
			ApiController({
				method: "POST",
				endpoint: `progress/${completeData.progress_induk.id_unit}/edit-progress-detail/${completeData.id_progresses_detail}`,
				datas: formData
			}).then(response => {
				console.log(response)
				history.back();
			})
		}
		postProgress()	
	}

	onMount(() => {
		idUnitTemp = window.location.href.slice(55);
		idUnitReal = idUnitTemp.replace(/\D/g, "");
		getDetailData();
	})
</script>

<div id="after-login-layout">
	<Navbar/>
	<div class="flex">
		<Sidebar statusPointer="Unit" pagePointer="teknis"/>
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
							{#if completeData}
								{#if completeData.nama_progress == "Air"}
								<div class="title-card-progress">Fasilitas Umum</div>
									<div class="flex flex-direction-col flex-gap-semi-small">
										<div class="title-input-progress">Air</div>
										<div class="card-secondary flex flex-direction-col flex-gap-semi-large">
											<div class="flex flex-gap-regular">
												<div class="flex flex-direction-col flex-gap-small w-31">
													<div class="title-input-nup">Tanggal Mulai</div>
													<input type="date" name="" class="input-nup" bind:value={form.tanggal_mulai}>
												</div>
												<div class="flex flex-direction-col flex-gap-small w-31">
													<div class="title-input-nup">Tanggal Target</div>
													<input type="date" name="" class="input-nup" bind:value={form.tanggal_target}>
												</div>
												<div class="flex flex-direction-col flex-gap-small w-31">
													<div class="title-input-nup">Tanggal Selesai</div>
													<input type="date" name="" class="input-nup" bind:value={form.tanggal_selesai}>
												</div>
											</div>
											<div class="flex flex-gap-regular">
												<div class="flex flex-direction-col flex-gap-small w-100">
													<div class="title-input-nup">Keterangan</div>
													<textarea class="input-nup textarea-spec" placeholder="keterangan.." bind:value={form.keterangan}></textarea>
												</div>
											</div>
											<div class="flex flex-gap-small">
												<input type="checkbox" name="" bind:checked={form.progress}>
												<div class="title-input-nup">Tandai sebagai selesai</div>
											</div>
										</div>
									</div>
								{:else if completeData.nama_progress == "SLO"}
									<div class="title-card-progress">Fasilitas Umum</div>
										<div class="flex flex-direction-col flex-gap-semi-small">
											<div class="title-input-progress">SLO</div>
											<div class="card-secondary flex flex-direction-col flex-gap-semi-large">
												<div class="flex flex-gap-regular">
													<div class="flex flex-direction-col flex-gap-small w-31">
														<div class="title-input-nup">Tanggal Mulai</div>
														<input type="date" name="" class="input-nup" bind:value={form.tanggal_mulai}>
													</div>
													<div class="flex flex-direction-col flex-gap-small w-31">
														<div class="title-input-nup">Tanggal Target</div>
														<input type="date" name="" class="input-nup" bind:value={form.tanggal_target}>
													</div>
													<div class="flex flex-direction-col flex-gap-small w-31">
														<div class="title-input-nup">Tanggal Selesai</div>
														<input type="date" name="" class="input-nup" bind:value={form.tanggal_selesai}>
													</div>
												</div>
												<div class="flex flex-gap-regular">
													<div class="flex flex-direction-col flex-gap-small w-100">
														<div class="title-input-nup">Keterangan</div>
														<textarea class="input-nup textarea-spec" placeholder="keterangan.." bind:value={form.keterangan}></textarea>
													</div>
												</div>
												<div class="flex flex-gap-small">
													<input type="checkbox" name="" bind:checked={form.progress}>
													<div class="title-input-nup">Tandai sebagai selesai</div>
												</div>
											</div>
										</div>
									{:else if completeData.nama_progress == "BP"}
										<div class="title-card-progress">Fasilitas Umum</div>
										<div class="flex flex-direction-col flex-gap-semi-small">
											<div class="title-input-progress">BP</div>
											<div class="card-secondary flex flex-direction-col flex-gap-semi-large">
												<div class="flex flex-gap-regular">
													<div class="flex flex-direction-col flex-gap-small w-31">
														<div class="title-input-nup">Tanggal Mulai</div>
														<input type="date" name="" class="input-nup" bind:value={form.tanggal_mulai}>
													</div>
													<div class="flex flex-direction-col flex-gap-small w-31">
														<div class="title-input-nup">Tanggal Target</div>
														<input type="date" name="" class="input-nup" bind:value={form.tanggal_target}>
													</div>
													<div class="flex flex-direction-col flex-gap-small w-31">
														<div class="title-input-nup">Tanggal Selesai</div>
														<input type="date" name="" class="input-nup" bind:value={form.tanggal_selesai}>
													</div>
												</div>
												<div class="flex flex-gap-regular">
													<div class="flex flex-direction-col flex-gap-small w-100">
														<div class="title-input-nup">Keterangan</div>
														<textarea class="input-nup textarea-spec" placeholder="keterangan.." bind:value={form.keterangan}></textarea>
													</div>
												</div>
												<div class="flex flex-gap-small">
													<input type="checkbox" name="" bind:checked={form.progress}>
													<div class="title-input-nup">Tandai sebagai selesai</div>
												</div>
											</div>
										</div>
									{:else if completeData.nama_progress == "KWH Listrik"}
										<div class="title-card-progress">Fasilitas Umum</div>
										<div class="flex flex-direction-col flex-gap-semi-small">
											<div class="title-input-progress">KWH Listrik</div>
											<div class="card-secondary flex flex-direction-col flex-gap-semi-large">
												<div class="flex flex-gap-regular">
													<div class="flex flex-direction-col flex-gap-small w-31">
														<div class="title-input-nup">Tanggal Mulai</div>
														<input type="date" name="" class="input-nup" bind:value={form.tanggal_mulai}>
													</div>
													<div class="flex flex-direction-col flex-gap-small w-31">
														<div class="title-input-nup">Tanggal Target</div>
														<input type="date" name="" class="input-nup" bind:value={form.tanggal_target}>
													</div>
													<div class="flex flex-direction-col flex-gap-small w-31">
														<div class="title-input-nup">Tanggal Selesai</div>
														<input type="date" name="" class="input-nup" bind:value={form.tanggal_selesai}>
													</div>
												</div>
												<div class="flex flex-gap-regular">
													<div class="flex flex-direction-col flex-gap-small w-100">
														<div class="title-input-nup">Keterangan</div>
														<textarea class="input-nup textarea-spec" placeholder="keterangan.." bind:value={form.keterangan}></textarea>
													</div>
												</div>
												<div class="flex flex-gap-small">
													<input type="checkbox" name="" bind:checked={form.progress}>
													<div class="title-input-nup">Tandai sebagai selesai</div>
												</div>
											</div>
										</div>
									{:else if completeData.nama_progress == "Makadam" || completeData.nama_progress == "Cor"}
									<div class="title-card-progress">Infrastruktur</div>
									<div class="flex flex-direction-col flex-gap-semi-small">
										<div class="title-input-progress">Jalan Makadam/Cor</div>
										<div class="card-secondary flex flex-direction-col flex-gap-semi-large">
											<div class="flex flex-gap-regular">
												<div class="flex flex-direction-col flex-gap-small w-30">
													<div class="title-input-nup">Pilih Jalan</div>
													<select class="select-nup" bind:value={form.jenis_jalan}>
														<option value="Makadam">Makadam</option>
														<option value="Cor">Cor</option>
													</select>
												</div>
											</div>
											<div class="flex flex-gap-regular">
												<div class="flex flex-direction-col flex-gap-small w-31">
													<div class="title-input-nup">Tanggal Mulai</div>
													<input type="date" name="" class="input-nup" bind:value={form.tanggal_mulai}>
												</div>
												<div class="flex flex-direction-col flex-gap-small w-31">
													<div class="title-input-nup">Tanggal Target</div>
													<input type="date" name="" class="input-nup" bind:value={form.tanggal_target}>
												</div>
												<div class="flex flex-direction-col flex-gap-small w-31">
													<div class="title-input-nup">Tanggal Selesai</div>
													<input type="date" name="" class="input-nup" bind:value={form.tanggal_selesai}>
												</div>
											</div>
											<div class="flex flex-gap-regular">
												<div class="flex flex-direction-col flex-gap-small w-100">
													<div class="title-input-nup">Keterangan</div>
													<textarea class="input-nup textarea-spec" placeholder="keterangan.." bind:value={form.keterangan}></textarea>
												</div>
											</div>
											<div class="flex flex-gap-small">
												<input type="checkbox" name="" bind:checked={form.progress}>
												<div class="title-input-nup">Tandai sebagai selesai</div>
											</div>
										</div>
									</div>
									{:else if completeData.nama_progress == "Drainase"}
									<div class="title-card-progress">Infrastruktur</div>
									<div class="flex flex-direction-col flex-gap-semi-small">
										<div class="title-input-progress">Drainase</div>
										<div class="card-secondary flex flex-direction-col flex-gap-semi-large">
											<div class="flex flex-gap-regular">
												<div class="flex flex-direction-col flex-gap-small w-31">
													<div class="title-input-nup">Tanggal Mulai</div>
													<input type="date" name="" class="input-nup" bind:value={form.tanggal_mulai}>
												</div>
												<div class="flex flex-direction-col flex-gap-small w-31">
													<div class="title-input-nup">Tanggal Target</div>
													<input type="date" name="" class="input-nup" bind:value={form.tanggal_target}>
												</div>
												<div class="flex flex-direction-col flex-gap-small w-31">
													<div class="title-input-nup">Tanggal Selesai</div>
													<input type="date" name="" class="input-nup" bind:value={form.tanggal_selesai}>
												</div>
											</div>
											<div class="flex flex-gap-regular">
												<div class="flex flex-direction-col flex-gap-small w-100">
													<div class="title-input-nup">Keterangan</div>
													<textarea class="input-nup textarea-spec" placeholder="keterangan.." bind:value={form.keterangan}></textarea>
												</div>
											</div>
											<div class="flex flex-gap-small">
												<input type="checkbox" name="" bind:checked={form.progress}>
												<div class="title-input-nup">Tandai sebagai selesai</div>
											</div>
										</div>
									</div>
									{:else if completeData.nama_progress == "SSB"}
									<div class="title-card-progress">SLF</div>
									<div class="flex flex-direction-col flex-gap-semi-small">
										<div class="title-input-progress">SSB</div>
										<div class="card-secondary flex flex-direction-col flex-gap-semi-large">
											<div class="flex flex-gap-regular">
												<div class="flex flex-direction-col flex-gap-small w-31">
													<div class="title-input-nup">Tanggal Mulai</div>
													<input type="date" name="" class="input-nup" bind:value={form.tanggal_mulai}>
												</div>
												<div class="flex flex-direction-col flex-gap-small w-31">
													<div class="title-input-nup">Tanggal Target</div>
													<input type="date" name="" class="input-nup" bind:value={form.tanggal_target}>
												</div>
												<div class="flex flex-direction-col flex-gap-small w-31">
													<div class="title-input-nup">Tanggal Selesai</div>
													<input type="date" name="" class="input-nup" bind:value={form.tanggal_selesai}>
												</div>
											</div>
											<div class="flex flex-gap-regular">
												<div class="flex flex-direction-col flex-gap-small w-100">
													<div class="title-input-nup">Keterangan</div>
													<textarea class="input-nup textarea-spec" placeholder="keterangan.." bind:value={form.keterangan}></textarea>
												</div>
											</div>
											<div class="flex flex-gap-small">
												<input type="checkbox" name="" bind:checked={form.progress}>
												<div class="title-input-nup">Tandai sebagai selesai</div>
											</div>
										</div>
									</div>
									{:else if completeData.nama_progress == "FLPP"}
									<div class="title-card-progress">SLF</div>
									<div class="flex flex-direction-col flex-gap-semi-small">
										<div class="title-input-progress">FLPP</div>
										<div class="card-secondary flex flex-direction-col flex-gap-semi-large">
											<div class="flex flex-gap-regular">
												<div class="flex flex-direction-col flex-gap-small w-31">
													<div class="title-input-nup">Tanggal Mulai</div>
													<input type="date" name="" class="input-nup" bind:value={form.tanggal_mulai}>
												</div>
												<div class="flex flex-direction-col flex-gap-small w-31">
													<div class="title-input-nup">Tanggal Target</div>
													<input type="date" name="" class="input-nup" bind:value={form.tanggal_target}>
												</div>
												<div class="flex flex-direction-col flex-gap-small w-31">
													<div class="title-input-nup">Tanggal Selesai</div>
													<input type="date" name="" class="input-nup" bind:value={form.tanggal_selesai}>
												</div>
											</div>
											<div class="flex flex-gap-regular">
												<div class="flex flex-direction-col flex-gap-small w-100">
													<div class="title-input-nup">Keterangan</div>
													<textarea class="input-nup textarea-spec" placeholder="keterangan.." bind:value={form.keterangan}></textarea>
												</div>
											</div>
											<div class="flex flex-gap-small">
												<input type="checkbox" name="" bind:checked={form.progress}>
												<div class="title-input-nup">Tandai sebagai selesai</div>
											</div>
										</div>
									</div>
								{/if}
							{/if}
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