<script type="text/javascript">
	import Sidebar from '../../../../../../components/sidebar.svelte'
	import Navbar from '../../../../../../components/navbar.svelte'
	import { onMount } from 'svelte';
	import {fly, scale} from 'svelte/transition'
	import ApiController from '../../../../../../ApiController'

	let idUnitTemp;
	let idUnitReal;
	
	let form= {
		progress_air: false,
		keterangan_air: '',
		tanggal_target_air: '',
		tanggal_mulai_air: '',
		tanggal_selesai_air: '',
		progress_slo: false,
		keterangan_slo: '',
		tanggal_target_slo: '',
		tanggal_mulai_slo: '',
		tanggal_selesai_slo: '',
		progress_bp: false,
		keterangan_bp: '',
		tanggal_target_bp: '',
		tanggal_mulai_bp: '',
		tanggal_selesai_bp: '',
		progress_kwh_listrik: false,
		keterangan_kwh_listrik: '',
		tanggal_target_kwh_listrik: '',
		tanggal_mulai_kwh_listrik: '',
		tanggal_selesai_kwh_listrik: '',
		jenis_jalan: '',
		progress_makadam_cor: false,
		keterangan_makadam_cor: '',
		tanggal_target_makadam_cor: '',
		tanggal_mulai_makadam_cor: '',
		tanggal_selesai_makadam_cor: '',
		progress_drainase: false,
		keterangan_drainase: '',
		tanggal_target_drainase: '',
		tanggal_mulai_drainase: '',
		tanggal_selesai_drainase: '',
		progress_ssb: false,
		keterangan_ssb: '',
		tanggal_target_ssb: '',
		tanggal_mulai_ssb: '',
		tanggal_selesai_ssb: '',
		progress_flpp: false,
		keterangan_flpp: '',
		tanggal_target_flpp: '',
		tanggal_mulai_flpp: '',
		tanggal_selesai_flpp: ''
	};

	function sendProgress() {
		const formData = new FormData();
		formData.append('progress_air',form.progress_air)
		formData.append('keterangan_air', form.keterangan_air)
		formData.append('tanggal_target_air', form.tanggal_target_air)
		formData.append('tanggal_mulai_air', form.tanggal_mulai_air)
		formData.append('tanggal_selesai_air', form.tanggal_selesai_air)
		formData.append('progress_slo', form.progress_slo)
		formData.append('keterangan_slo', form.keterangan_slo)
		formData.append('tanggal_target_slo', form.tanggal_target_slo)
		formData.append('tanggal_mulai_slo', form.tanggal_mulai_slo)
		formData.append('tanggal_selesai_slo', form.tanggal_selesai_slo)
		formData.append('progress_bp', form.progress_bp)
		formData.append('keterangan_bp', form.keterangan_bp)
		formData.append('tanggal_target_bp', form.tanggal_target_bp)
		formData.append('tanggal_mulai_bp', form.tanggal_mulai_bp)
		formData.append('tanggal_selesai_bp', form.tanggal_selesai_bp)
		formData.append('progress_kwh_listrik', form.progress_kwh_listrik)
		formData.append('keterangan_kwh_listrik', form.keterangan_kwh_listrik)
		formData.append('tanggal_target_kwh_listrik',form.tanggal_target_kwh_listrik)
		formData.append('tanggal_mulai_kwh_listrik', form.tanggal_mulai_kwh_listrik)
		formData.append('tanggal_selesai_kwh_listrik', form.tanggal_selesai_kwh_listrik)
		formData.append('jenis_jalan', form.jenis_jalan)
		formData.append('progress_makadam_cor', form.progress_makadam_cor)
		formData.append('keterangan_makadam_cor', form.keterangan_makadam_cor)
		formData.append('tanggal_target_makadam_cor', form.tanggal_target_makadam_cor)
		formData.append('tanggal_mulai_makadam_cor', form.tanggal_mulai_makadam_cor)
		formData.append('tanggal_selesai_makadam_cor', form.tanggal_selesai_makadam_cor)
		formData.append('progress_drainase', form.progress_drainase)
		formData.append('keterangan_drainase', form.keterangan_drainase)
		formData.append('tanggal_target_drainase', form.tanggal_target_drainase)
		formData.append('tanggal_mulai_drainase', form.tanggal_mulai_drainase)
		formData.append('tanggal_selesai_drainase', form.tanggal_selesai_drainase)
		formData.append('progress_ssb', form.progress_ssb)
		formData.append('keterangan_ssb', form.keterangan_ssb)
		formData.append('tanggal_target_ssb', form.tanggal_target_ssb)
		formData.append('tanggal_mulai_ssb', form.tanggal_mulai_ssb)
		formData.append('tanggal_selesai_ssb', form.tanggal_selesai_ssb)
		formData.append('progress_flpp', form.progress_flpp)
		formData.append('keterangan_flpp', form.keterangan_flpp)
		formData.append('tanggal_target_flpp', form.tanggal_target_flpp)
		formData.append('tanggal_mulai_flpp', form.tanggal_mulai_flpp)
		formData.append('tanggal_selesai_flpp', form.tanggal_selesai_flpp)

		let postProgress = () => {
			ApiController({
				method: "POST",
				endpoint: `teknis/unit/${idUnitReal}/atur-progress`,
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
							<div class="title-card-progress">Fasilitas Umum</div>
							<div class="flex flex-direction-col flex-gap-semi-small">
								<div class="title-input-progress">Air</div>
								<div class="card-secondary flex flex-direction-col flex-gap-semi-large">
									<div class="flex flex-gap-regular">
										<div class="flex flex-direction-col flex-gap-small w-31">
											<div class="title-input-nup">Tanggal Mulai</div>
											<input type="date" name="" class="input-nup" bind:value={form.tanggal_mulai_air}>
										</div>
										<div class="flex flex-direction-col flex-gap-small w-31">
											<div class="title-input-nup">Tanggal Target</div>
											<input type="date" name="" class="input-nup" bind:value={form.tanggal_target_air}>
										</div>
										<div class="flex flex-direction-col flex-gap-small w-31">
											<div class="title-input-nup">Tanggal Selesai</div>
											<input type="date" name="" class="input-nup" bind:value={form.tanggal_selesai_air}>
										</div>
									</div>
									<div class="flex flex-gap-regular">
										<div class="flex flex-direction-col flex-gap-small w-100">
											<div class="title-input-nup">Keterangan</div>
											<textarea class="input-nup textarea-spec" placeholder="keterangan.." bind:value={form.keterangan_air}></textarea>
										</div>
									</div>
									<div class="flex flex-gap-small">
										<input type="checkbox" name="" bind:checked={form.progress_air}>
										<div class="title-input-nup">Tandai sebagai selesai</div>
									</div>
								</div>
							</div>
							<div class="flex flex-direction-col flex-gap-semi-small">
								<div class="title-input-progress">SLO</div>
								<div class="card-secondary flex flex-direction-col flex-gap-semi-large">
									<div class="flex flex-gap-regular">
										<div class="flex flex-direction-col flex-gap-small w-31">
											<div class="title-input-nup">Tanggal Mulai</div>
											<input type="date" name="" class="input-nup" bind:value={form.tanggal_mulai_slo}>
										</div>
										<div class="flex flex-direction-col flex-gap-small w-31">
											<div class="title-input-nup">Tanggal Target</div>
											<input type="date" name="" class="input-nup" bind:value={form.tanggal_target_slo}>
										</div>
										<div class="flex flex-direction-col flex-gap-small w-31">
											<div class="title-input-nup">Tanggal Selesai</div>
											<input type="date" name="" class="input-nup" bind:value={form.tanggal_selesai_slo}>
										</div>
									</div>
									<div class="flex flex-gap-regular">
										<div class="flex flex-direction-col flex-gap-small w-100">
											<div class="title-input-nup">Keterangan</div>
											<textarea class="input-nup textarea-spec" placeholder="keterangan.." bind:value={form.keterangan_slo}></textarea>
										</div>
									</div>
									<div class="flex flex-gap-small">
										<input type="checkbox" name="" bind:checked={form.progress_slo}>
										<div class="title-input-nup">Tandai sebagai selesai</div>
									</div>
								</div>
							</div>
							<div class="flex flex-direction-col flex-gap-semi-small">
								<div class="title-input-progress">BP</div>
								<div class="card-secondary flex flex-direction-col flex-gap-semi-large">
									<div class="flex flex-gap-regular">
										<div class="flex flex-direction-col flex-gap-small w-31">
											<div class="title-input-nup">Tanggal Mulai</div>
											<input type="date" name="" class="input-nup" bind:value={form.tanggal_mulai_bp}>
										</div>
										<div class="flex flex-direction-col flex-gap-small w-31">
											<div class="title-input-nup">Tanggal Target</div>
											<input type="date" name="" class="input-nup" bind:value={form.tanggal_target_bp}>
										</div>
										<div class="flex flex-direction-col flex-gap-small w-31">
											<div class="title-input-nup">Tanggal Selesai</div>
											<input type="date" name="" class="input-nup" bind:value={form.tanggal_selesai_bp}>
										</div>
									</div>
									<div class="flex flex-gap-regular">
										<div class="flex flex-direction-col flex-gap-small w-100">
											<div class="title-input-nup">Keterangan</div>
											<textarea class="input-nup textarea-spec" placeholder="keterangan.." bind:value={form.keterangan_bp}></textarea>
										</div>
									</div>
									<div class="flex flex-gap-small">
										<input type="checkbox" name="" bind:checked={form.progress_bp}>
										<div class="title-input-nup">Tandai sebagai selesai</div>
									</div>
								</div>
							</div>
							<div class="flex flex-direction-col flex-gap-semi-small">
								<div class="title-input-progress">KWH Listrik</div>
								<div class="card-secondary flex flex-direction-col flex-gap-semi-large">
									<div class="flex flex-gap-regular">
										<div class="flex flex-direction-col flex-gap-small w-31">
											<div class="title-input-nup">Tanggal Mulai</div>
											<input type="date" name="" class="input-nup" bind:value={form.tanggal_mulai_kwh_listrik}>
										</div>
										<div class="flex flex-direction-col flex-gap-small w-31">
											<div class="title-input-nup">Tanggal Target</div>
											<input type="date" name="" class="input-nup" bind:value={form.tanggal_target_kwh_listrik}>
										</div>
										<div class="flex flex-direction-col flex-gap-small w-31">
											<div class="title-input-nup">Tanggal Selesai</div>
											<input type="date" name="" class="input-nup" bind:value={form.tanggal_selesai_kwh_listrik}>
										</div>
									</div>
									<div class="flex flex-gap-regular">
										<div class="flex flex-direction-col flex-gap-small w-100">
											<div class="title-input-nup">Keterangan</div>
											<textarea class="input-nup textarea-spec" placeholder="keterangan.." bind:value={form.keterangan_kwh_listrik}></textarea>
										</div>
									</div>
									<div class="flex flex-gap-small">
										<input type="checkbox" name="" bind:checked={form.progress_kwh_listrik}>
										<div class="title-input-nup">Tandai sebagai selesai</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="card w-70 padding-progress">
						<div class="flex flex-direction-col flex-gap-regular">
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
											<input type="date" name="" class="input-nup" bind:value={form.tanggal_mulai_makadam_cor}>
										</div>
										<div class="flex flex-direction-col flex-gap-small w-31">
											<div class="title-input-nup">Tanggal Target</div>
											<input type="date" name="" class="input-nup" bind:value={form.tanggal_target_makadam_cor}>
										</div>
										<div class="flex flex-direction-col flex-gap-small w-31">
											<div class="title-input-nup">Tanggal Selesai</div>
											<input type="date" name="" class="input-nup" bind:value={form.tanggal_selesai_makadam_cor}>
										</div>
									</div>
									<div class="flex flex-gap-regular">
										<div class="flex flex-direction-col flex-gap-small w-100">
											<div class="title-input-nup">Keterangan</div>
											<textarea class="input-nup textarea-spec" placeholder="keterangan.." bind:value={form.keterangan_makadam_cor}></textarea>
										</div>
									</div>
									<div class="flex flex-gap-small">
										<input type="checkbox" name="" bind:checked={form.progress_makadam_cor}>
										<div class="title-input-nup">Tandai sebagai selesai</div>
									</div>
								</div>
							</div>
							<div class="flex flex-direction-col flex-gap-semi-small">
								<div class="title-input-progress">Drainase</div>
								<div class="card-secondary flex flex-direction-col flex-gap-semi-large">
									<div class="flex flex-gap-regular">
										<div class="flex flex-direction-col flex-gap-small w-31">
											<div class="title-input-nup">Tanggal Mulai</div>
											<input type="date" name="" class="input-nup" bind:value={form.tanggal_mulai_drainase}>
										</div>
										<div class="flex flex-direction-col flex-gap-small w-31">
											<div class="title-input-nup">Tanggal Target</div>
											<input type="date" name="" class="input-nup" bind:value={form.tanggal_target_drainase}>
										</div>
										<div class="flex flex-direction-col flex-gap-small w-31">
											<div class="title-input-nup">Tanggal Selesai</div>
											<input type="date" name="" class="input-nup" bind:value={form.tanggal_selesai_drainase}>
										</div>
									</div>
									<div class="flex flex-gap-regular">
										<div class="flex flex-direction-col flex-gap-small w-100">
											<div class="title-input-nup">Keterangan</div>
											<textarea class="input-nup textarea-spec" placeholder="keterangan.." bind:value={form.keterangan_drainase}></textarea>
										</div>
									</div>
									<div class="flex flex-gap-small">
										<input type="checkbox" name="" bind:checked={form.progress_drainase}>
										<div class="title-input-nup">Tandai sebagai selesai</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="card w-70 padding-progress">
						<div class="flex flex-direction-col flex-gap-regular">
							<div class="title-card-progress">SLF</div>
							<div class="flex flex-direction-col flex-gap-semi-small">
								<div class="title-input-progress">SSB</div>
								<div class="card-secondary flex flex-direction-col flex-gap-semi-large">
									<div class="flex flex-gap-regular">
										<div class="flex flex-direction-col flex-gap-small w-31">
											<div class="title-input-nup">Tanggal Mulai</div>
											<input type="date" name="" class="input-nup" bind:value={form.tanggal_mulai_ssb}>
										</div>
										<div class="flex flex-direction-col flex-gap-small w-31">
											<div class="title-input-nup">Tanggal Target</div>
											<input type="date" name="" class="input-nup" bind:value={form.tanggal_target_ssb}>
										</div>
										<div class="flex flex-direction-col flex-gap-small w-31">
											<div class="title-input-nup">Tanggal Selesai</div>
											<input type="date" name="" class="input-nup" bind:value={form.tanggal_selesai_ssb}>
										</div>
									</div>
									<div class="flex flex-gap-regular">
										<div class="flex flex-direction-col flex-gap-small w-100">
											<div class="title-input-nup">Keterangan</div>
											<textarea class="input-nup textarea-spec" placeholder="keterangan.." bind:value={form.keterangan_ssb}></textarea>
										</div>
									</div>
									<div class="flex flex-gap-small">
										<input type="checkbox" name="" bind:checked={form.progress_ssb}>
										<div class="title-input-nup">Tandai sebagai selesai</div>
									</div>
								</div>
							</div>
							<div class="flex flex-direction-col flex-gap-semi-small">
								<div class="title-input-progress">FLPP</div>
								<div class="card-secondary flex flex-direction-col flex-gap-semi-large">
									<div class="flex flex-gap-regular">
										<div class="flex flex-direction-col flex-gap-small w-31">
											<div class="title-input-nup">Tanggal Mulai</div>
											<input type="date" name="" class="input-nup" bind:value={form.tanggal_mulai_flpp}>
										</div>
										<div class="flex flex-direction-col flex-gap-small w-31">
											<div class="title-input-nup">Tanggal Target</div>
											<input type="date" name="" class="input-nup" bind:value={form.tanggal_target_flpp}>
										</div>
										<div class="flex flex-direction-col flex-gap-small w-31">
											<div class="title-input-nup">Tanggal Selesai</div>
											<input type="date" name="" class="input-nup" bind:value={form.tanggal_selesai_flpp}>
										</div>
									</div>
									<div class="flex flex-gap-regular">
										<div class="flex flex-direction-col flex-gap-small w-100">
											<div class="title-input-nup">Keterangan</div>
											<textarea class="input-nup textarea-spec" placeholder="keterangan.." bind:value={form.keterangan_flpp}></textarea>
										</div>
									</div>
									<div class="flex flex-gap-small">
										<input type="checkbox" name="" bind:checked={form.progress_flpp}>
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