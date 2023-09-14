<script type="text/javascript">
	import Sidebar from '../../../../../components/sidebar.svelte';
	import Navbar from '../../../../../components/navbar.svelte';
	import { onMount } from 'svelte';
	import { fly, scale } from 'svelte/transition';
	import ApiController from '../../../../../ApiController';

	export let data

	let detailCicilan = null
	let popUpSection = ''

	let createAlert = (inputId, msg) => {
		if(document.getElementById(`alert-${inputId}`)){
			document.getElementById(`alert-${inputId}`).remove()
		}

		let parent = document.getElementById(inputId).parentElement
		let text = document.createElement('p')
		text.id = `alert-${inputId}`
		text.textContent = msg
		text.style.color = "red"
		text.style.fontSize = "12px"
		parent.appendChild(text)

		document.getElementById(inputId).addEventListener('change', () => {
			if(document.getElementById(`alert-${inputId}`)){
				document.getElementById(`alert-${inputId}`).remove()
			}
		})
	}

	let getDetail = () => {
		ApiController({
			method:"GET",
			endpoint: `cicilan/${data.params.id_nup}`
		}).then(response => {
			detailCicilan = response.data.data
		})
	}

	let atur = () => {
		let nominal = document.getElementById('nominal').value
		let tanggal = document.getElementById('tanggal').value

		if(nominal == ''){
			createAlert('nominal', 'Nominal tidak boleh kosong!')
			return
		}

		if(tanggal == ''){
			createAlert('tanggal', 'Pilih tanggal pembayaran!')
			return
		}

		ApiController({
			method:"POST",
			endpoint:`cicilan/${data.params.id_nup}/atur-sbum`,
			datas:{
				nominal: nominal,
				tanggal: tanggal
			}
		}).then(response => {
			if(response.data.message == "Atur SBUM Success."){
				popUpSection = 'success'
				document.getElementById('pop-up').style.display = 'flex'
			}else{
				popUpSection = 'fail'
				document.getElementById('pop-up').style.display = 'flex'
			}
		}).catch(err => {
			console.log(err)
			popUpSection = 'fail'
				document.getElementById('pop-up').style.display = 'flex'
		})
	}

	onMount(async () => {
		getDetail()
	})
</script>

<div id="after-login-layout">
	<Navbar />
	<div class="flex">
		<Sidebar statusPointer="Cicilan" pagePointer="admin" />
		<div class="w-80 content">
			<div class="flex flex-direction-col flex-gap-large">
				<div class="flex flex-direction-col flex-gap-semi-large w-100">
					<div class="flex flex-direction-col flex-gap-semi-small w-100">
						<div class="title-content">SBUM</div>
						<div class="flex flex-gap-regular flex-center-vertical">
							<div class="text-breadcrumb">Cicilan</div>
							<img src="/images/icons/Arrow_Right.svg" alt="" />
							<div class="text-breadcrumb">Detail</div>
							<img src="/images/icons/Arrow_Right.svg" alt="" />
							<div class="text-breadcrumb-active">SBUM</div>
						</div>
					</div>
					<div class="card w-50">
						<div class="flex flex-direction-col flex-gap-semi-large">
							<div class="flex flex-center-vertical">
								<div class="title-card-tambah-nup">SBUM</div>
							</div>
							<div class="flex flex-gap-regular">
								<div class="flex flex-direction-col flex-gap-small w-50">
									<div class="title-input-nup">Nominal Dibayarkan</div>
									<input type="number" id="nominal" class="input-nup" value="{detailCicilan != null ? detailCicilan.sbum.nominal : ''}"/>
								</div>
								<div class="flex flex-direction-col flex-gap-small w-50">
									<div class="title-input-nup">Tanggal Pembayaran</div>
									<input type="date" name="" class="input-nup" id="tanggal" value="{detailCicilan != null ? detailCicilan.sbum.tanggal_pembayaran.split(" ")[0] : ''}"/>
								</div>
							</div>
						</div>
					</div>
					<div class="w-50 flex flex-gap-regular flex-end-horizontal">
						<button class="btn-outline flex flex-center-vertical flex-gap-small"
						on:click={() => window.history.back()}>
							<span>Batal</span>
						</button> 
						<button class="btn-fill flex flex-center-vertical flex-gap-small" on:click={atur}>
							<span>Simpan</span>
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<div id="pop-up" class="pop-up-background">
	<div class="pop-up-container" style="width: 300px">
		<div>
			{#if popUpSection == 'success'}
			<div class="pop-up-title">Berhasil di Atur!</div>
			{:else}
			<div class="pop-up-title">Gagal di Atur!</div>
			{/if}
		</div>
		<div class="w-100" style="display: flex; flex-direction: column; gap: 8px;">
			{#if popUpSection == 'success'}
			<div class="pop-up-body-bold">Data telah berhasil disimpan!</div>
			{:else}
			<div class="pop-up-body-bold">Data gagal disimpan. Pastikan data yang diinputkan benar. Silahkan coba lagi!</div>
			{/if}
		</div>
		<div class="flex flex-gap-regular w-100">
			<button class="btn-outline flex flex-center-vertical flex-center-horizontal flex-gap-small" on:click={() => {
				if(popUpSection == 'success'){
					window.history.back()
				}else{
					document.getElementById('pop-up').style.display = 'none'
				}
			}} style="flex: 1;">
				<span>Tutup</span>
			</button> 
		</div>
	</div>
</div>