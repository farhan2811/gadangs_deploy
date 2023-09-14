<script type="text/javascript">
	import Sidebar from '../../../../../components/sidebar.svelte';
	import Navbar from '../../../../../components/navbar.svelte';
	import { onMount } from 'svelte';
	import { fly, scale } from 'svelte/transition';
	import ApiController from '../../../../../ApiController';
</script>

<div id="after-login-layout">
	<Navbar />
	<div class="flex">
		<Sidebar statusPointer="Cicilan" pagePointer="admin" />
		<div class="w-80 content">
			<div class="flex flex-direction-col flex-gap-large">
				<div class="flex flex-direction-col flex-gap-semi-large w-100">
					<div class="flex flex-direction-col flex-gap-semi-small w-100">
						<div class="title-content">Atur Cicilan</div>
						<div class="flex flex-gap-regular flex-center-vertical">
							<div class="text-breadcrumb">Cicilan</div>
							<img src="/images/icons/Arrow_Right.svg" alt="" />
							<div class="text-breadcrumb">Detail</div>
							<img src="/images/icons/Arrow_Right.svg" alt="" />
							<div class="text-breadcrumb-active">Atur Cicilan</div>
						</div>
					</div>
					<div class="card w-70">
						<div class="flex flex-direction-col flex-gap-semi-large">
							<div class="flex flex-center-vertical">
								<div class="title-card-tambah-nup">Cicilan</div>
							</div>
							<div class="flex flex-gap-regular">
								<div class="flex flex-direction-col flex-gap-small w-50">
									<div class="title-input-nup">Total Yang Harus Di Bayar</div>
									<input type="text" id="nominal" class="input-nup" />
								</div>
								<div class="flex flex-direction-col flex-gap-small w-50">
									<div class="title-input-nup">Status Cicilan</div>
									<select class="select-nup">
										<option value="Belum Lunas" selected>Belum Lunas</option>
										<option value="Lunas">Lunas</option>
									</select>
								</div>
							</div>
							<div class="flex flex-gap-small flex-center-vertical">
								<input type="checkbox" id="pernyataan"> 
								<label class="title-input-nup" for="pernyataan">Pengaturan Cicilan diatur sesuai dengan Syarat & Ketentuan yang berlaku</label>
							</div>
						</div>
					</div>
					<div class="flex flex-end-horizontal w-70">
						<div class="w-40 flex flex-gap-regular flex-end-horizontal">
							<button class="btn-outline flex flex-center-vertical flex-gap-small"
							on:click={() => window.history.back()}>
								<span>Batal</span>
							</button> 
							<button class="btn-fill flex flex-center-vertical flex-gap-small">
								<span>Simpan</span>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
