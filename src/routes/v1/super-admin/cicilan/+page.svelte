<script type="text/javascript">
	import Sidebar from '../../../../components/sidebar.svelte'
	import Navbar from '../../../../components/navbar.svelte'
	import { onMount } from 'svelte';
	import {fly, scale} from 'svelte/transition'
	import ApiController from '../../../../ApiController'

	let cicilanData = null

	let getCicilan = () => {
		ApiController({
			method:"GET",
			endpoint: 'cicilan'
		}).then(response => {
			cicilanData = response.data.data
		})
	}

	onMount(async () => {
		getCicilan()
	})

</script>

<div id="after-login-layout">
	<Navbar/>
	<div class="flex">
		<Sidebar statusPointer="Cicilan" pagePointer="admin"/>
		<div class="w-80 content">
			<div class="flex flex-direction-col flex-gap-large" in:fly={{ y: -20, duration: 600 }}>
				<div class="flex flex-between-horizontal flex-center-vertical w-100">
					<div class="title-content">Daftar Cicilan</div>
				</div>
				<div class="flex flex-direction-col flex-gap-regular">
					<div class="flex flex-gap-semi-large w-100">
						<input type="text" placeholder="Cari NUP" class="input-col-2 w-15" id="filter-nup">
						<input type="text" placeholder="Cari Pemesan" class="input-col-2 w-15" id="filter-pemesan">
						<div class="flex flex-gap-semi-large w-100">
							<select class="select-col-3 w-20">
								<option hidden selected value="">Pilih Cara Bayar</option>
								<option>KPR Subsidi</option>
								<option>KPR Komersil</option>
								<option>Cash Bertahap</option>
							</select>
						</div>
					</div>
					<div class="flex flex-direction-col flex-gap-regular">
						<div class="card-head height-fit">
							<div class="flex">
								<div class="flex flex-gap-small flex-center-vertical w-10 border-separate">
									<div class="text-drop-card">NUP</div>
									<img src="/images/icons/Arrow.svg" alt="">
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-20 border-separate">
									<div class="text-drop-card">Pemesan</div>
									<img src="/images/icons/Arrow.svg" alt="">
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-20 border-separate">
									<div class="text-drop-card">Head Marketing</div>
									<img src="/images/icons/Arrow.svg" alt="">
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-20 border-separate">
									<div class="text-drop-card">Marketing</div>
									<img src="/images/icons/Arrow.svg" alt="">
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-20 border-separate">
									<div class="text-drop-card">Cara Bayar</div>
									<img src="/images/icons/Arrow.svg" alt="">
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-15 border-separate">
									<div class="text-drop-card">Status</div>
									<img src="/images/icons/Arrow.svg" alt="">
								</div>
							</div>
						</div>
						{#if cicilanData != null}
						{#if cicilanData.length > 0}
						{#each cicilanData as d}
						<a href="/v1/super-admin/cicilan/detail-cicilan/{d.nup.id_nup}" class="no-decor">
							<div class="card-head height-fit">
								<div class="flex">
									<div class="flex flex-gap-small flex-center-vertical w-10 no-border-table">
										<div class="text-drop-card">{d.nup.nup}</div>
									</div>
									<div class="flex flex-gap-small flex-center-vertical w-20 no-border-table">
										<div class="text-drop-card">{d.client.nama_client}</div>
									</div>
									<div class="flex flex-gap-small flex-center-vertical w-20 no-border-table">
										<div class="text-drop-card">{d.lead_marketing.nama}</div>
									</div>
									<div class="flex flex-gap-small flex-center-vertical w-20 no-border-table">
										<div class="text-drop-card">{d.marketing.nama}</div>
									</div>
									<div class="flex flex-gap-small flex-center-vertical w-20 no-border-table">
										<div class="text-drop-card">{d.cara_bayar}</div>
									</div>
									<div class="flex flex-gap-small flex-center-vertical w-15 no-border-table">
										{#if d.status_pembayaran}
										<div class="text-approve">Lunas</div>
										{:else}
										<div class="text-reject">Belum Lunas</div>
										{/if}
									</div>
								</div>
							</div>
						</a>
						{/each}
						{:else}
						<div class="card-head height-fit">
							<div class="flex">
								<div class="flex flex-gap-small flex-center-vertical flex-center-horizontal w-100 no-border-table">
									<div class="text-drop-card">Tidak Ada Data</div>
								</div>
							</div>
						</div>
						{/if}
						{/if}
					</div>
					<div class="card w-100 height-fit">
						<div class="flex flex-between-horizontal">
							<div class="flex flex-gap-regular flex-center-vertical">
								<div class="text-display-sort">Menampilkan</div>
								<select class="select-sort">
									<option>10</option>
								</select>
								<div class="text-display-sort">dari <span class="bold-number">{cicilanData == null ? '' : cicilanData.length}</span> data Cicilan</div>
							</div>
							<div class="flex flex-gap-regular flex-center-vertical">
								<div class="flex flex-center-vertical flex-center-horizontal border-pagination"><img src="/images/icons/Arrow_Left.svg" alt=""></div>
								<div class="flex flex-center-vertical flex-center-horizontal border-pagination"><div class="text-display-sort bold-number" alt="">1</div></div>
								<div class="flex flex-center-vertical flex-center-horizontal border-pagination"><img src="/images/icons/Arrow_Right.svg" alt=""></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>