<script type="text/javascript">
	import Sidebar from '../../../../../components/sidebar.svelte'
	import Navbar from '../../../../../components/navbar.svelte'
	import { onMount } from 'svelte';
	import {fly, scale} from 'svelte/transition'
	import ApiController from '../../../../../ApiController';

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

	let tambah = () => {
		let nama = document.getElementById('nama-agensi').value
		let nama_rekening = document.getElementById('nama-pemilik').value
		let no_rekening = document.getElementById('nomor-rekening').value
		let nama_bank = document.getElementById('nama-bank').value
		let cabang_bank = document.getElementById('cabang').value

		if(nama == ''){
			createAlert('nama-agensi', 'Mohon isi Nama Agensi')
			return
		}

		if(nama_bank == ''){
			createAlert('nama-bank', 'Mohon isi Nama Bank')
			return
		}

		if(no_rekening == ''){
			createAlert('nomor-rekening', 'Mohon isi Nomor Rekening')
			return
		}

		if(nama_rekening == ''){
			createAlert('nama-pemilik', 'Mohon isi Nama Pemilik Rekening')
			return
		}

		if(cabang_bank == ''){
			createAlert('cabang', 'Mohon isi Nama Cabang Bank')
			return
		}

		ApiController({
			method:"POST",
			endpoint:'agensi/add',
			datas: {
				nama, nama_bank, no_rekening, nama_rekening, cabang_bank
			}
		}).then(response => {
			if(response.data.message == "Tambah Agensi Success."){
				popUpSection = 'success'
				document.getElementById('pop-up').style.display = 'flex'
			}else{
				popUpSection = 'fail'
				document.getElementById('pop-up').style.display = 'flex'
			}
		})
	}
	
</script>

<svelte:head>
  <style>
	.form-card-title{
		font-family: 'Open Sans'; 
		font-size: 14px; 
		font-weight: 600; 
		line-height: 20px; 
		color: #172426; 
		font-style: normal;
	}

	.form-input-label{
		font-family: 'Open Sans'; 
		font-size: 12px; 
		font-weight: 600; 
		line-height: 18px; 
		color: #3F4E50; 
		font-style: normal;
		letter-spacing: 0.024px;
	}

	.form-button-outline{
		cursor: pointer;
		display: flex;
		padding: 4px 16px;
		flex-direction: column;
		align-items: flex-start;
		gap: 10px;
		border-radius: 8px;
		border: 1px solid #0469FF;
		background-color: transparent;
		color: #0469FF;
		font-family: "Open Sans";
		font-size: 12px;
		font-style: normal;
		font-weight: 400;
		line-height: 16px;
		letter-spacing: 0.024px;
	}
  </style>
</svelte:head>

<div id="after-login-layout">
	<Navbar/>
	<div class="flex">
		<Sidebar statusPointer="Agensi" pagePointer="admin"/>
		<div class="w-80 content">
			<div class="flex flex-direction-col flex-gap-large" in:fly={{ y: -20, duration: 600 }}>
				<div class="flex flex-direction-col flex-gap-semi-large w-100">
					<div class="flex flex-direction-col flex-gap-semi-small w-100">
						<div class="title-content">Tambah Agensi</div>
						<div class="flex flex-gap-regular flex-center-vertical">
							<div class="text-breadcrumb">Agensi</div>
							<img src="/images/icons/Arrow_Right.svg" alt="">
							<div class="text-breadcrumb-active">Tambah</div>
						</div>
					</div>
					<div class="w-40 custom-border bg-white" style="display: flex; flex-direction: column; gap: 16px; padding: 24px; border-radius: 8px;">
						<div class="flex flex-direction-col flex-gap-semi-large">
							<div class="flex flex-center-vertical flex-center-horizontal flex-between-horizontal">
								<div class="form-card-title">Informasi Agensi</div>
							</div>
							<div class="flex flex-direction-col flex-gap-small w-100">
								<div class="form-input-label">Nama Agensi</div>
								<input type="text" name="" class="input-nup" id="nama-agensi" >
							</div>
							<div class="flex flex-direction-col flex-gap-small w-100">
								<div class="form-input-label">Informasi Bank</div>
								<div class="custom-inner-card">
									<div class="flex flex-gap-regular w-100">
										<div class="flex flex-direction-col flex-gap-small w-50">
											<div class="form-input-label">Nama Bank</div>
											<input type="text" name="" class="input-nup" id="nama-bank" >
										</div>
										<div class="flex flex-direction-col flex-gap-small w-50">
											<div class="form-input-label">Nomor Rekening</div>
											<input type="text" name="" class="input-nup" id="nomor-rekening" >
										</div>
									</div>
									<div class="flex flex-gap-regular w-100">
										<div class="flex flex-direction-col flex-gap-small w-50">
											<div class="form-input-label">Nama di Rekening Bank</div>
											<input type="text" name="" class="input-nup" id="nama-pemilik" >
										</div>
										<div class="flex flex-direction-col flex-gap-small w-50">
											<div class="form-input-label">Cabang Bank</div>
											<input type="text" name="" class="input-nup" id="cabang" >
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="w-40 flex flex-gap-regular flex-end-horizontal">
						<button class="btn-outline flex flex-center-vertical flex-gap-small" on:click={() => window.history.back()}>
							<span>Batal</span>
						</button>
						<button class="btn-fill flex flex-center-vertical flex-gap-small" on:click={() => tambah()}>
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
			<div class="pop-up-title">Berhasil!</div>
			{:else}
			<div class="pop-up-title">Gagal!</div>
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