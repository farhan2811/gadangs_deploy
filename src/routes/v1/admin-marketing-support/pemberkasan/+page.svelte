<script type="text/javascript">
	import Sidebar from '../../../components/sidebar.svelte'
	import Navbar from '../../../components/navbar.svelte'
	import { onMount } from 'svelte';
	import {fly, scale} from 'svelte/transition'
	
</script>

<div id="after-login-layout">
	<Navbar/>
	<div class="flex">
		<Sidebar statusPointer="Pemberkasan" pagePointer="ams"/>
		<div class="w-80 content">
			<div class="flex flex-direction-col flex-gap-large" in:fly={{ y: -20, duration: 600 }}>
				<div class="flex flex-between-horizontal flex-center-vertical w-100">
					<div class="title-content">Daftar Pemberkasan</div>
				</div>
				<div class="flex flex-direction-col flex-gap-regular">
					<div class="flex">
						<select class="select-col-2 w-25">
							<option disabled selected>Semua Perum</option>
							<option>Epicentrum Sepatan</option>
							<option>Serpong</option>
						</select>
					</div>
					<div class="flex flex-gap-semi-large w-100">
						<input type="text" placeholder="Cari NUP" class="input-col-2 w-15">
						<input type="text" placeholder="Cari Pemesan" class="input-col-2 w-15">
						<input type="text" placeholder="Cari Head Marketing" class="input-col-2 w-15">
						<input type="text" placeholder="Cari Marketing" class="input-col-2 w-15">
						<input type="date" class="input-col-2 w-15">
						<input type="date" class="input-col-2 w-15">
					</div>
					<div class="scroll-x flex flex-direction-col flex-gap-regular">
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
									<div class="text-drop-card">Perum</div>
									<img src="/images/icons/Arrow.svg">
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-25 border-separate">
									<div class="text-drop-card">Lead Marketing</div>
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
										<div class="text-drop-card padding-spec-nup-1">Down Payment</div>
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
						<a href="/super-admin/pemberkasan/detail-pemberkasan" class="no-decor">
							<div class="card-head w-content height-fit">
								<div class="flex">
									<div class="flex flex-gap-small flex-center-vertical w-10 no-border-table">
										<div class="text-drop-card">30001</div>
									</div>
									<div class="flex flex-gap-small flex-center-vertical w-20 no-border-table">
										<div class="text-drop-card">Suryadi</div>
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
										<a href="/super-admin/nup/edit-nup" class="no-decor"><img src="/images/icons/Edit.svg"></a>
										<img src="/images/icons/Delete.svg">
									</div>
								</div>
							</div>
						</a>
							<div class="card-head w-content height-fit">
								<div class="flex">
									<div class="flex flex-gap-small flex-center-vertical w-10 no-border-table">
										<div class="text-drop-card">30001</div>
									</div>
									<div class="flex flex-gap-small flex-center-vertical w-20 no-border-table">
										<div class="text-drop-card">Suryadi</div>
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
										<a href="/super-admin/nup/edit-nup" class="no-decor"><img src="/images/icons/Edit.svg"></a>
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
										<a href="/super-admin/nup/edit-nup" class="no-decor"><img src="/images/icons/Edit.svg"></a>
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
										<a href="/super-admin/nup/edit-nup" class="no-decor"><img src="/images/icons/Edit.svg"></a>
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
										<a href="/super-admin/nup/edit-nup" class="no-decor"><img src="/images/icons/Edit.svg"></a>
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
										<a href="/super-admin/nup/edit-nup" class="no-decor"><img src="/images/icons/Edit.svg"></a>
										<img src="/images/icons/Delete.svg">
									</div>
								</div>
							</div>
					</div>
					<div class="card w-100 height-fit">
						<div class="flex flex-between-horizontal">
							<div class="flex flex-gap-regular flex-center-vertical">
								<div class="text-display-sort">Menampilkan</div>
								<select class="select-sort">
									<option>10</option>
								</select>
								<div class="text-display-sort">dari <span class="bold-number">28</span> data NUP</div>
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