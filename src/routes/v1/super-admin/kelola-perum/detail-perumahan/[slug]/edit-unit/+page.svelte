<script type="text/javascript">
	import Sidebar from '../../../../../../../components/sidebar.svelte'
	import Navbar from '../../../../../../../components/navbar.svelte'
	import { onMount } from 'svelte';
	import {fly, scale} from 'svelte/transition'
	export let data
	
	let idPerumahan = data.params.slug 
	console.log(idPerumahan)
</script>

<div id="after-login-layout">
	<Navbar/>
	<div class="flex">
		<Sidebar statusPointer="Kompilasi" pagePointer="admin"/>
		<div class="w-80 content">
			<div class="flex flex-direction-col flex-gap-large" in:fly={{ y: -20, duration: 600 }}>
				<div class="flex flex-direction-col flex-gap-semi-large w-100">
					<div class="flex flex-direction-col flex-gap-semi-small w-100">
						<div class="title-content">Edit Unit</div>
						<div class="flex flex-gap-regular flex-center-vertical">
							<div class="text-breadcrumb">Kelola Perum</div>
							<img src="/images/icons/Arrow_Right.svg">
							<div class="text-breadcrumb">Detail</div>
							<img src="/images/icons/Arrow_Right.svg">
							<div class="text-breadcrumb-active">Edit Unit</div>
						</div>
					</div>
					<div class="card w-70">
						<div class="flex flex-direction-col flex-gap-semi-large">
							<div class="flex flex-gap-regular">
								<div class="flex flex-direction-col flex-gap-small w-50">
									<div class="title-input-nup">No SPK</div>
									<input type="text" name="" class="input-nup" placeholder="no spk..">
								</div>
								<div class="flex flex-direction-col flex-gap-small w-50">
									<div class="title-input-nup">Target SPK</div>
									<input type="text" name="" class="input-nup" placeholder="target spk..">
								</div>
							</div>
							<div class="flex flex-gap-regular">
								<div class="flex flex-direction-col flex-gap-small w-100">
									<div class="title-input-nup">Subkon/Mandor</div>
									<input type="text" name="" class="input-nup" placeholder="subkon/mandor..">
								</div>
							</div>
							<div class="flex flex-gap-regular">
								<div class="flex flex-direction-col flex-gap-small w-25">
									<div class="title-input-nup">Blok</div>
									<select class="select-nup">
										<option>AA2</option>
									</select>
								</div>
								<div class="flex flex-direction-col flex-gap-small w-komp">
									<div class="title-input-nup">No. Rumah</div>
									<input type="text" name="" class="input-nup" placeholder="lantai..">
								</div>
								<div class="flex flex-direction-col flex-gap-small w-komp">
									<div class="title-input-nup">Lantai</div>
									<input type="text" name="" class="input-nup" placeholder="lantai..">
								</div>
								<div class="flex flex-direction-col flex-gap-small w-komp">
									<div class="title-input-nup">Unit</div>
									<input type="text" name="" class="input-nup" placeholder="unit..">
								</div>
								<div class="flex flex-direction-col flex-gap-small w-komp">
									<div class="title-input-nup">Tipe</div>
									<input type="text" name="" class="input-nup" placeholder="tipe..">
								</div>
							</div>
							<div class="flex flex-direction-col flex-gap-semi-small">
								<div class="title-input-nup">Atur Tarif Unit</div>
								<div class="card-secondary flex flex-direction-col flex-gap-semi-large">
									<div class="flex flex-gap-regular">
										<div class="flex flex-direction-col flex-gap-small w-50">
											<div class="title-input-nup">Harga Unit</div>
											<input type="text" name="" class="input-nup" placeholder="harga unit..">
										</div>
										<div class="flex flex-direction-col flex-gap-small w-50">
											<div class="title-input-nup">Versi Pricelist</div>
											<input type="text" name="" class="input-nup" placeholder="versi pricelist..">
										</div>
									</div>
								</div>
								<div class="title-input-nup">Waktu Pembangunan</div>
								<div class="card-secondary flex flex-direction-col flex-gap-semi-large">
									<div class="flex flex-gap-regular">
										<div class="flex flex-direction-col flex-gap-small w-31">
											<div class="title-input-nup">Mulai Pembangunan</div>
											<input type="date" name="" class="input-nup">
										</div>
										<div class="flex flex-direction-col flex-gap-small w-31">
											<div class="title-input-nup">Target Selesai</div>
											<input type="date" name="" class="input-nup">
										</div>
										<div class="flex flex-direction-col flex-gap-small w-31">
											<div class="title-input-nup">Selesai Pembangunan</div>
											<input type="date" name="" class="input-nup">
										</div>
									</div>
									<div class="flex flex-gap-regular">
										<div class="flex flex-direction-col flex-gap-small w-100">
											<div class="title-input-nup">Keterangan</div>
											<textarea class="input-nup textarea-spec" placeholder="keterangan.."></textarea>
										</div>
									</div>
								</div>
								<div class="title-input-nup">Kavling Siap Bangun</div>
								<div class="card-secondary flex flex-direction-col flex-gap-semi-large">
									<div class="flex flex-gap-regular">
										<div class="flex flex-direction-col flex-gap-small w-31">
											<div class="title-input-nup">Mulai Land Clearing</div>
											<input type="date" name="" class="input-nup">
										</div>
										<div class="flex flex-direction-col flex-gap-small w-31">
											<div class="title-input-nup">Target Selesai</div>
											<input type="date" name="" class="input-nup">
										</div>
										<div class="flex flex-direction-col flex-gap-small w-31">
											<div class="title-input-nup">Tanggal Selesai</div>
											<input type="date" name="" class="input-nup">
										</div>
									</div>
									<div class="flex flex-gap-regular">
										<div class="flex flex-direction-col flex-gap-small w-100">
											<div class="title-input-nup">Keterangan</div>
											<textarea class="input-nup textarea-spec" placeholder="keterangan.."></textarea>
										</div>
									</div>
								</div>
								<div class="title-input-nup">Unggah Berkas</div>
								<div class="card-secondary flex flex-direction-col flex-gap-semi-large">
									<div class="flex flex-gap-regular">
										<div class="flex flex-direction-col flex-gap-small w-48">
											<div class="title-input-nup">Foto Unit/Rancangan</div>
											<input type="file" class="file-nup">
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="flex flex-end-horizontal w-70">
						<div class="w-40 flex flex-gap-regular flex-end-horizontal">
							<a href="/v1/super-admin/kelola-perum/detail-perumahan" class="no-decor"><button class="btn-outline flex flex-center-vertical flex-gap-small"><span>Batal</span></button></a>
							<button class="btn-fill flex flex-center-vertical flex-gap-small"><span>Simpan Unit</span></button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>