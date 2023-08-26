<script type="text/javascript">
	import Sidebar from '../../../components/sidebar.svelte'
	import Navbar from '../../../components/navbar.svelte'
	import { onMount } from 'svelte';
	import {fly, scale} from 'svelte/transition'
	import ApiController from '../../../ApiController'

	let nups = null
	let nupList = null
	let perumahanList = null

	let getNUPList = () => {
		ApiController({
			method: "GET",
			endpoint: `nup`
		}).then(response => {
			nups = response.data.data
			nupList = nups
			for (let i = 0; i < 5; i++) {
				let temp = {
					"id_nup": i+2,
					"nup": "-",
					"marketing": `Bernio ${i + 2}`,
					"lead_marketing": `Alex ${i + 2}`,
					"perumahan": i % 2 == 1 ? "PEK" : "GPC",
					"client": {
						"nama_client" : `Doremi ${i + 2}`,
						"pekerjaan" : 'Astronot'
					},
					"booking_fee": "1000000",
					"tanggal_pembayaran": "25-05-2023",
					"status_ho": "pending",
					"status_finance": "pending",
					"keterangan": "Berkas Tidak Lengkap",
					"tanggal_submit": `25-${i != 4 ? `0${i+6}` : i + 6}-2023`
				}
				nups.push(temp)
			}
		})
	}

	let getPerumahanList = () => {
		ApiController({
			method: 'GET',
			endpoint: `perumahan`
		}).then(response => {
			perumahanList = response.data.data
			perumahanList.push({
				kode : "GPC",
				nama : "Griya Panorama Cimanggung"
			})
		})
	}

	let filterData = () => {
		nups = nupList
		let tempNupList = nups

		let perum = document.getElementById('select-perum').value
		let nup = document.getElementById('filter-nup').value
		let pemesan = document.getElementById('filter-pemesan').value
		let head_marketing = document.getElementById('filter-head-marketing').value
		let marketing = document.getElementById('filter-marketing').value

		tempNupList = tempNupList.filter(elm => {
			return elm.perumahan.includes(perum) &&
				elm.id_nup.toString().includes(nup) &&
				elm.client.nama_client.toLowerCase().includes(pemesan) &&
				elm.lead_marketing.toLowerCase().includes(head_marketing) &&
				elm.marketing.toLowerCase().includes(marketing)
		})

		nups = tempNupList
	}

	onMount(() => {
		getNUPList()
		getPerumahanList()
	})
	
</script>

<div id="after-login-layout">
	<Navbar/>
	<div class="flex">
		<Sidebar statusPointer="Nup" pagePointer="ams"/>
			<div class="w-80 content">
			<div class="flex flex-direction-col flex-gap-large" in:fly={{ y: -20, duration: 600 }}>
				<div class="flex flex-between-horizontal flex-center-vertical w-100">
					<div class="title-content">Daftar NUP</div>
					<div class="flex flex-gap-regular">
						<button class="btn-outline flex flex-center-vertical flex-gap-small"><span>Download Excel</span> <img src="/images/icons/File_Download.svg"></button>
						<a href="/admin-marketing-support/nup/tambah-nup" class="no-decor"><button class="btn-fill flex flex-center-vertical flex-gap-small"><img src="/images/icons/Add_Plus.svg"> <span>Tambah NUP</span></button></a>
					</div>
				</div>
				<div class="flex flex-direction-col flex-gap-regular">
					<div class="flex">
						<select id="select-perum" class="select-col-2 w-25" on:change={() => {
							filterData()
						}}>
							<option selected value="">Semua Perum</option>
							{#if perumahanList != null}
							{#each perumahanList as perum}
								<option value="{perum.kode}">{perum.nama}</option>
							{/each}
							{/if}
						</select>
					</div>
					<div class="flex flex-gap-semi-large w-100">
						<input type="text" placeholder="Cari NUP" class="input-col-2 w-15" id="filter-nup" on:input={() => {
							filterData()
						}}>
						<input type="text" placeholder="Cari Pemesan" class="input-col-2 w-15" id="filter-pemesan" on:input={() => {
							filterData()
						}}>
						<input type="text" placeholder="Cari Head Marketing" class="input-col-2 w-15" id="filter-head-marketing" on:input={() => {
							filterData()
						}}>
						<input type="text" placeholder="Cari Marketing" class="input-col-2 w-15" id="filter-marketing" on:input={() => {
							filterData()
						}}>
						<input type="date" class="input-col-2 w-15">
						<input type="date" class="input-col-2 w-15">
					</div>
					<div class="{nups != null && nups.length == 0 ? 'scroll-x-hidden' : 'scroll-x'} flex flex-direction-col flex-gap-regular">
						<div class="card-head w-content height-fit">
							<div class="flex">
								<div class="flex flex-gap-small flex-center-vertical w-10 border-separate">
									<div class="text-drop-card">NUP</div>
									<img src="/images/icons/Arrow.svg">
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-20 border-separate">
									<div class="text-drop-card">Pemesan</div>
									<img src="/images/icons/Arrow.svg">
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-20 border-separate">
									<div class="text-drop-card">Pekerjaan</div>
									<img src="/images/icons/Arrow.svg">
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-20 border-separate">
									<div class="text-drop-card">Perum</div>
									<img src="/images/icons/Arrow.svg">
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-25 border-separate">
									<div class="text-drop-card">Head Marketing</div>
									<img src="/images/icons/Arrow.svg">
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-20 border-separate">
									<div class="text-drop-card">Marketing</div>
									<img src="/images/icons/Arrow.svg">
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-20 border-separate">
									<div class="text-drop-card">Tanggal Submit</div>
									<img src="/images/icons/Arrow.svg">
								</div>
								<div class="flex flex-direction-col flex-center-vertical w-30 border-separate-2">
									<div class="flex w-100 flex-center-horizontal border-bottom-seperate">
										<div class="text-drop-card padding-spec-nup-1">Booking Fee</div>
									</div>
									<div class="flex w-100">
										<div class="flex flex-center-horizontal w-50 border-separate-2">
											<div class="text-drop-card padding-spec-nup-1 ">Tanggal</div>
										</div>
										<div class="flex flex-center-horizontal w-50">
											<div class="text-drop-card padding-spec-nup-1">Nominal</div>
										</div>
									</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-20 border-separate">
									<div class="text-drop-card">Status</div>
									<img src="/images/icons/Arrow.svg">
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-40 border-separate">
									<div class="text-drop-card">Keterangan</div>
									<img src="/images/icons/Arrow.svg">
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-10 border-non-separate">
									<div class="text-drop-card">Aksi</div>
									<img src="/images/icons/Arrow.svg">
								</div>
							</div>
						</div>
						{#if nups != null}
						{#if nups.length != 0}
						{#each nups as nup}
						<a href="/admin-marketing-support/nup/detail-nup/{nup.id_nup}" class="no-decor">
							<div class="card-head w-content height-fit">
								<div class="flex">
									<div class="flex flex-gap-small flex-center-vertical w-10 no-border-table">
										<div class="text-drop-card">{nup.id_nup}</div>
									</div>
									<div class="flex flex-gap-small flex-center-vertical w-20 no-border-table">
										<div class="text-drop-card">{nup.client.nama_client}</div>
									</div>
									<div class="flex flex-gap-small flex-center-vertical w-20 no-border-table">
										<div class="text-drop-card">{nup.client.pekerjaan}</div>
									</div>
									<div class="flex flex-gap-small flex-center-vertical w-20 no-border-table">
										<div class="text-drop-card">{nup.perumahan}</div>
									</div>
									<div class="flex flex-gap-small flex-center-vertical w-25 no-border-table">
										<div class="text-drop-card">{nup.lead_marketing}</div>
									</div>
									<div class="flex flex-gap-small flex-center-vertical w-20 no-border-table">
										<div class="text-drop-card">{nup.marketing}</div>
									</div>
									<div class="flex flex-gap-small flex-center-vertical w-20 no-border-table">
										<div class="text-drop-card">{nup.tanggal_submit}</div>
									</div>
									<div class="flex flex-direction-col flex-center-vertical flex-center-horizontal w-30">
										<div class="flex w-100 flex-center-vertical">
											<div class="flex flex-center-horizontal flex-center-vertical w-50">
												<div class="text-drop-card padding-spec-nup-1 ">{nup.tanggal_pembayaran}</div>
											</div>
											<div class="flex flex-center-horizontal flex-center-vertical w-50">
												<div class="text-drop-card padding-spec-nup-1">{nup.booking_fee}</div>
											</div>
										</div>
									</div>
									<div class="flex flex-direction-col flex-gap-small flex-center-vertical w-20 no-border-table">
										{#if nup.status_ho == 'pending'}
										<div class="text-pending">{nup.status_ho.toUpperCase()}</div>
										{:else if nup.status_ho == 'approve'}
										<div class="text-approve">{nup.status_ho.toUpperCase()}</div>
										{:else if nup.status_ho == null} 
										<div class="text-reject">REJECT</div>
										{:else}
										<div class="text-reject">{nup.status_ho.toUpperCase()}</div>
										{/if}
									</div>
									<div class="flex flex-gap-small flex-center-vertical w-40 no-border-table">
										<div class="text-drop-card">{nup.keterangan}</div>
									</div>
									<div class="flex flex-gap-small flex-center-vertical w-10 no-border-table">
										<a href="/super-admin/nup/edit-nup" class="no-decor"><img src="/images/icons/Edit.svg"></a>
										<img src="/images/icons/Delete.svg">
									</div>
								</div>
							</div>
						</a>
						{/each}
						{:else}
						<div class="card-head height-fit">
							<div class="flex flex-center-horizontal">
								<div class="flex flex-gap-small flex-center-vertical no-border-table">
									<div class="text-drop-card">Data tidak ada</div>
								</div>
							</div>	
						</div>
						{/if}
						{/if}
						<!-- 
						<div class="card-head w-content height-fit">
							<div class="flex">
								<div class="flex flex-gap-small flex-center-vertical w-10 no-border-table">
									<div class="text-drop-card">30001</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-20 no-border-table">
									<div class="text-drop-card">Suryadi</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-20 no-border-table">
									<div class="text-drop-card">Karyawan</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-20 no-border-table">
									<div class="text-drop-card">GPC</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-25 no-border-table">
									<div class="text-drop-card">Zaenal Muharom</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-20 no-border-table">
									<div class="text-drop-card">Zaenal Muharom</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-20 no-border-table">
									<div class="text-drop-card">25 Apr 2018</div>
								</div>
								<div class="flex flex-direction-col flex-center-vertical flex-center-horizontal w-30">
									<div class="flex w-100 flex-center-vertical">
										<div class="flex flex-center-horizontal flex-center-vertical w-50">
											<div class="text-drop-card padding-spec-nup-1 ">19 Apr 2018</div>
										</div>
										<div class="flex flex-center-horizontal flex-center-vertical w-50">
											<div class="text-drop-card padding-spec-nup-1">Rp. 1.000.000</div>
										</div>
									</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-20 no-border-table">
									<div class="text-approve">Approve</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-40 no-border-table">
									<div class="text-drop-card">Sedang proses pemberkasan</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-10 no-border-table">
									<img src="/images/icons/Edit.svg">
									<img src="/images/icons/Delete.svg">
								</div>
							</div>
						</div>
						<div class="card-head w-content height-fit">
							<div class="flex">
								<div class="flex flex-gap-small flex-center-vertical w-10 no-border-table">
									<div class="text-drop-card">30001</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-20 no-border-table">
									<div class="text-drop-card">Suryadi</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-20 no-border-table">
									<div class="text-drop-card">Karyawan</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-20 no-border-table">
									<div class="text-drop-card">GPC</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-25 no-border-table">
									<div class="text-drop-card">Zaenal Muharom</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-20 no-border-table">
									<div class="text-drop-card">Zaenal Muharom</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-20 no-border-table">
									<div class="text-drop-card">25 Apr 2018</div>
								</div>
								<div class="flex flex-direction-col flex-center-vertical flex-center-horizontal w-30">
									<div class="flex w-100 flex-center-vertical">
										<div class="flex flex-center-horizontal flex-center-vertical w-50">
											<div class="text-drop-card padding-spec-nup-1 ">19 Apr 2018</div>
										</div>
										<div class="flex flex-center-horizontal flex-center-vertical w-50">
											<div class="text-drop-card padding-spec-nup-1">Rp. 1.000.000</div>
										</div>
									</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-20 no-border-table">
									<div class="text-approve">Approve</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-40 no-border-table">
									<div class="text-drop-card">Sedang proses pemberkasan</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-10 no-border-table">
									<img src="/images/icons/Edit.svg">
									<img src="/images/icons/Delete.svg">
								</div>
							</div>
						</div>
						<div class="card-head w-content height-fit">
							<div class="flex">
								<div class="flex flex-gap-small flex-center-vertical w-10 no-border-table">
									<div class="text-drop-card">30001</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-20 no-border-table">
									<div class="text-drop-card">Suryadi</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-20 no-border-table">
									<div class="text-drop-card">Karyawan</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-20 no-border-table">
									<div class="text-drop-card">GPC</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-25 no-border-table">
									<div class="text-drop-card">Zaenal Muharom</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-20 no-border-table">
									<div class="text-drop-card">Zaenal Muharom</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-20 no-border-table">
									<div class="text-drop-card">25 Apr 2018</div>
								</div>
								<div class="flex flex-direction-col flex-center-vertical flex-center-horizontal w-30">
									<div class="flex w-100 flex-center-vertical">
										<div class="flex flex-center-horizontal flex-center-vertical w-50">
											<div class="text-drop-card padding-spec-nup-1 ">19 Apr 2018</div>
										</div>
										<div class="flex flex-center-horizontal flex-center-vertical w-50">
											<div class="text-drop-card padding-spec-nup-1">Rp. 1.000.000</div>
										</div>
									</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-20 no-border-table">
									<div class="text-approve">Approve</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-40 no-border-table">
									<div class="text-drop-card">Sedang proses pemberkasan</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-10 no-border-table">
									<img src="/images/icons/Edit.svg">
									<img src="/images/icons/Delete.svg">
								</div>
							</div>
						</div>
						<div class="card-head w-content height-fit">
							<div class="flex">
								<div class="flex flex-gap-small flex-center-vertical w-10 no-border-table">
									<div class="text-drop-card">30001</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-20 no-border-table">
									<div class="text-drop-card">Suryadi</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-20 no-border-table">
									<div class="text-drop-card">Karyawan</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-20 no-border-table">
									<div class="text-drop-card">GPC</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-25 no-border-table">
									<div class="text-drop-card">Zaenal Muharom</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-20 no-border-table">
									<div class="text-drop-card">Zaenal Muharom</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-20 no-border-table">
									<div class="text-drop-card">25 Apr 2018</div>
								</div>
								<div class="flex flex-direction-col flex-center-vertical flex-center-horizontal w-30">
									<div class="flex w-100 flex-center-vertical">
										<div class="flex flex-center-horizontal flex-center-vertical w-50">
											<div class="text-drop-card padding-spec-nup-1 ">19 Apr 2018</div>
										</div>
										<div class="flex flex-center-horizontal flex-center-vertical w-50">
											<div class="text-drop-card padding-spec-nup-1">Rp. 1.000.000</div>
										</div>
									</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-20 no-border-table">
									<div class="text-approve">Approve</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-40 no-border-table">
									<div class="text-drop-card">Sedang proses pemberkasan</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-10 no-border-table">
									<img src="/images/icons/Edit.svg">
									<img src="/images/icons/Delete.svg">
								</div>
							</div>
						</div>
						<div class="card-head w-content height-fit">
							<div class="flex">
								<div class="flex flex-gap-small flex-center-vertical w-10 no-border-table">
									<div class="text-drop-card">30001</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-20 no-border-table">
									<div class="text-drop-card">Suryadi</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-20 no-border-table">
									<div class="text-drop-card">Karyawan</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-20 no-border-table">
									<div class="text-drop-card">GPC</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-25 no-border-table">
									<div class="text-drop-card">Zaenal Muharom</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-20 no-border-table">
									<div class="text-drop-card">Zaenal Muharom</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-20 no-border-table">
									<div class="text-drop-card">25 Apr 2018</div>
								</div>
								<div class="flex flex-direction-col flex-center-vertical flex-center-horizontal w-30">
									<div class="flex w-100 flex-center-vertical">
										<div class="flex flex-center-horizontal flex-center-vertical w-50">
											<div class="text-drop-card padding-spec-nup-1 ">19 Apr 2018</div>
										</div>
										<div class="flex flex-center-horizontal flex-center-vertical w-50">
											<div class="text-drop-card padding-spec-nup-1">Rp. 1.000.000</div>
										</div>
									</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-20 no-border-table">
									<div class="text-approve">Approve</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-40 no-border-table">
									<div class="text-drop-card">Sedang proses pemberkasan</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-10 no-border-table">
									<img src="/images/icons/Edit.svg">
									<img src="/images/icons/Delete.svg">
								</div>
							</div>
						</div>
						<div class="card-head w-content height-fit">
							<div class="flex">
								<div class="flex flex-gap-small flex-center-vertical w-10 no-border-table">
									<div class="text-drop-card">30001</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-20 no-border-table">
									<div class="text-drop-card">Suryadi</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-20 no-border-table">
									<div class="text-drop-card">Karyawan</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-20 no-border-table">
									<div class="text-drop-card">GPC</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-25 no-border-table">
									<div class="text-drop-card">Zaenal Muharom</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-20 no-border-table">
									<div class="text-drop-card">Zaenal Muharom</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-20 no-border-table">
									<div class="text-drop-card">25 Apr 2018</div>
								</div>
								<div class="flex flex-direction-col flex-center-vertical flex-center-horizontal w-30">
									<div class="flex w-100 flex-center-vertical">
										<div class="flex flex-center-horizontal flex-center-vertical w-50">
											<div class="text-drop-card padding-spec-nup-1 ">19 Apr 2018</div>
										</div>
										<div class="flex flex-center-horizontal flex-center-vertical w-50">
											<div class="text-drop-card padding-spec-nup-1">Rp. 1.000.000</div>
										</div>
									</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-20 no-border-table">
									<div class="text-approve">Approve</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-40 no-border-table">
									<div class="text-drop-card">Sedang proses pemberkasan</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-10 no-border-table">
									<img src="/images/icons/Edit.svg">
									<img src="/images/icons/Delete.svg">
								</div>
							</div>
						</div>
						<div class="card-head w-content height-fit">
							<div class="flex">
								<div class="flex flex-gap-small flex-center-vertical w-10 no-border-table">
									<div class="text-drop-card">30001</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-20 no-border-table">
									<div class="text-drop-card">Suryadi</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-20 no-border-table">
									<div class="text-drop-card">Karyawan</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-20 no-border-table">
									<div class="text-drop-card">GPC</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-25 no-border-table">
									<div class="text-drop-card">Zaenal Muharom</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-20 no-border-table">
									<div class="text-drop-card">Zaenal Muharom</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-20 no-border-table">
									<div class="text-drop-card">25 Apr 2018</div>
								</div>
								<div class="flex flex-direction-col flex-center-vertical flex-center-horizontal w-30">
									<div class="flex w-100 flex-center-vertical">
										<div class="flex flex-center-horizontal flex-center-vertical w-50">
											<div class="text-drop-card padding-spec-nup-1 ">19 Apr 2018</div>
										</div>
										<div class="flex flex-center-horizontal flex-center-vertical w-50">
											<div class="text-drop-card padding-spec-nup-1">Rp. 1.000.000</div>
										</div>
									</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-20 no-border-table">
									<div class="text-approve">Approve</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-40 no-border-table">
									<div class="text-drop-card">Sedang proses pemberkasan</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-10 no-border-table">
									<img src="/images/icons/Edit.svg">
									<img src="/images/icons/Delete.svg">
								</div>
							</div>
						</div>
						<div class="card-head w-content height-fit">
							<div class="flex">
								<div class="flex flex-gap-small flex-center-vertical w-10 no-border-table">
									<div class="text-drop-card">30001</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-20 no-border-table">
									<div class="text-drop-card">Suryadi</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-20 no-border-table">
									<div class="text-drop-card">Karyawan</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-20 no-border-table">
									<div class="text-drop-card">GPC</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-25 no-border-table">
									<div class="text-drop-card">Zaenal Muharom</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-20 no-border-table">
									<div class="text-drop-card">Zaenal Muharom</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-20 no-border-table">
									<div class="text-drop-card">25 Apr 2018</div>
								</div>
								<div class="flex flex-direction-col flex-center-vertical flex-center-horizontal w-30">
									<div class="flex w-100 flex-center-vertical">
										<div class="flex flex-center-horizontal flex-center-vertical w-50">
											<div class="text-drop-card padding-spec-nup-1 ">19 Apr 2018</div>
										</div>
										<div class="flex flex-center-horizontal flex-center-vertical w-50">
											<div class="text-drop-card padding-spec-nup-1">Rp. 1.000.000</div>
										</div>
									</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-20 no-border-table">
									<div class="text-approve">Approve</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-40 no-border-table">
									<div class="text-drop-card">Sedang proses pemberkasan</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-10 no-border-table">
									<img src="/images/icons/Edit.svg">
									<img src="/images/icons/Delete.svg">
								</div>
							</div>
						</div> -->
					</div>
					<div class="card w-100 height-fit">
						<div class="flex flex-between-horizontal">
							<div class="flex flex-gap-regular flex-center-vertical">
								<div class="text-display-sort">Menampilkan</div>
								<select class="select-sort">
									<option>10</option>
								</select>
								<div class="text-display-sort">dari <span class="bold-number">{nupList == null ? '' : nupList.length}</span> data NUP</div>
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