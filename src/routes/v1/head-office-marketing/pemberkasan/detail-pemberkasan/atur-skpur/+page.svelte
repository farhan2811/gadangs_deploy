<script type="text/javascript">
	import Sidebar from '../../../../../components/sidebar.svelte'
	import Navbar from '../../../../../components/navbar.svelte'
	import { onMount } from 'svelte';
	import {fly, scale} from 'svelte/transition'
	
</script>

<div id="after-login-layout">
	<Navbar/>
	<div class="flex">
		<Sidebar statusPointer="Pemberkasan" pagePointer="ho"/>
		<div class="w-80 content">
			<div class="flex flex-direction-col flex-gap-large" in:fly={{ y: -20, duration: 600 }}>
				<div class="flex flex-direction-col flex-gap-semi-large w-100">
					<div class="flex flex-direction-col flex-gap-semi-small w-100">
						<div class="title-content">Atur SKPUR</div>
						<div class="flex flex-gap-regular flex-center-vertical">
							<div class="text-breadcrumb">Pemberkasan</div>
							<img src="/images/icons/Arrow_Right.svg">
							<div class="text-breadcrumb">Detail Pemberkasan</div>
							<img src="/images/icons/Arrow_Right.svg">
							<div class="text-breadcrumb-active">Atur SKPUR</div>
						</div>
					</div>
					<div class="card w-70">
						<div class="flex flex-direction-col flex-gap-semi-large">
							<div class="flex flex-center-vertical">
								<div class="title-card-tambah-nup">SKPUR</div>
							</div>
							<div class="flex flex-gap-regular">
								<div class="flex flex-direction-col flex-gap-small w-30">
									<div class="title-input-nup">Nomor Surat SKPUR</div>
									<input type="text" name="" class="input-nup" placeholder="nominal down payment..">
								</div>
								<div class="flex flex-direction-col flex-gap-small w-30">
									<div class="title-input-nup">Tanggal Surat SKPUR</div>
									<input type="date" name="" class="input-nup">
								</div>
							</div>
							<div class="flex flex-direction-col flex-gap-semi-small">
								<div class="title-input-nup">Unggah Berkas</div>
								<div class="card-secondary flex flex-direction-col flex-gap-semi-large">
									<div class="flex flex-gap-regular">
										<div class="flex flex-direction-col flex-gap-small w-48">
											<div class="title-input-nup">Berkas SKPUR</div>
											<input type="file" class="file-nup">
										</div>
									</div>
								</div>
							</div>
							<div class="flex flex-gap-small flex-center-vertical">
								<input type="checkbox" name="materai">
								<label class="title-input-nup" for="materai">Sertakan Materai</label>
							</div>
						</div>
					</div>
					<div class="flex flex-end-horizontal w-70">
						<div class="w-40 flex flex-gap-regular flex-end-horizontal">
							<button class="btn-outline flex flex-center-vertical flex-gap-small"><span>Batal</span></button>
							<button class="btn-fill flex flex-center-vertical flex-gap-small"><span>Simpan SKPUR</span></button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>