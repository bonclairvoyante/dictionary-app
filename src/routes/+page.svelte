<script>
	// import { logo } from "$lib/info";
	import logo from '$lib/assets/images/logo.svg';
</script>

<!-- 
<div class="navbar bg-base-100">
	<div class="flex-initial">
		<enhanced:img src='/src/lib/assets/images/logo.svg' alt="dictionary-logo" />
	</div>
	<div class="flex-1">
		<ul class="menu menu-horizontal px-1">
			<li>
				<details>
					<summary>Serif</summary>
					<ul class="bg-base-100 rounded-t-none p-2">
						<li><a>Link 1</a></li>
						<li><a>Link 2</a></li>
					</ul>
				</details>
			</li>
		</ul>
	</div>
	<hr class="flex-grow-1 bg-primary-500" />

	<label class="flex cursor-pointer gap-2">
		
		<input type="checkbox" value="synthwave" class="toggle theme-controller" />
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="20"
			height="20"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
		</svg>
	</label>
</div> -->

<nav class="navbar flex sm:px-60 sm:gap-x-80">
	<div class="navbar-start">
        <enhanced:img src="/src/lib/assets/images/logo.svg" alt="dictionary-logo" />
    </div>
	<div class="flex navbar-end">
		<ul class="menu menu-horizontal px-1">
			<li>
				<details>
					<summary>Serif</summary>
					<ul class="bg-base-100 rounded-t-none p-2">
						<li><a href="#">Link 1</a></li>
						<li><a href="#">Link 2</a></li>
					</ul>
				</details>
			</li>
		</ul>
		<hr />
        <label class="flex cursor-pointer gap-2">
            <input type="checkbox" value="synthwave" class="toggle theme-controller dark: bg-violet-500" />
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="dark: stroke-violet-500"
            >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
        </label>
	</div>
</nav>
