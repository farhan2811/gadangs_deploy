<script type="text/javascript">
	import Sidebar from '../../../../../../components/sidebar.svelte'
	import Navbar from '../../../../../../components/navbar.svelte'
	import { onMount } from 'svelte';
	import {fly, scale} from 'svelte/transition'
	import ApiController from '../../../../../../ApiController'

	let idUnitTemp;
	let idUnitReal;
	
	let form= {
		tanggal_mulai: '',
		tanggal_target: '',
		tanggal_selesai: '',
		status_kavling: true,
		keterangan: ''
	};

	function sendProgress() {
		const formData = new FormData();
		formData.append('tanggal_mulai', form.tanggal_mulai)
		formData.append('tanggal_target', form.tanggal_target)
		formData.append('tanggal_selesai', form.tanggal_selesai)
		formData.append('status_kavling',form.status_kavling)
		formData.append('keterangan', form.keterangan)

		let postProgress = () => {
			ApiController({
				method: "POST",
				endpoint: `teknis/unit/${idUnitReal}/atur-kavling`,
				datas: formData
			}).then(response => {
				console.log(response)
				history.back();
			})
		}
		postProgress()	
	}

	onMount(() => {
		idUnitTemp = window.location.href.slice(32);
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
						<div class="title-content">Atur Kavling</div>
						<div class="flex flex-gap-regular flex-center-vertical">
							<div class="text-breadcrumb">Data Unit</div>
							<img src="/images/icons/Arrow_Right.svg">
							<div class="text-breadcrumb-active">Atur Kavling</div>
						</div>
					</div>
					<div class="card w-70 padding-progress">
						<div class="flex flex-direction-col flex-gap-regular">
							<div class="title-card-progress">Kavling Siap Bangun</div>
							<div class="flex flex-direction-col flex-gap-semi-small">
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
								</div>
							</div>
						</div>
					</div>
					<div class="flex flex-end-horizontal w-70">
						<div class="w-40 flex flex-gap-regular flex-end-horizontal">
							<button class="btn-outline flex flex-center-vertical flex-gap-small" on:click={() => {
								history.back();
							}}><span>Batal</span></button>
							<button class="btn-fill flex flex-center-vertical flex-gap-small" on:click={sendProgress}><span>Simpan Progress</span></button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>