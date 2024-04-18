var base = document.getElementsByClassName('main_map')

function init_main() {

	var inner = base
	console.log("testing!", inner)
	var newNode = null;
		if (inner != null) {

			var container = inner[0];

			var html = `

        <div class="Filters_Pane" id="filters_norm">
            <div class="f_header">
                Filter Options

                <input type="text" class="filter_input" id="filter_search" placeholder="Project Name" style="width:93%;padding:5px;text-align:left;" hidden />
                <input type="text" class="filter_input" id="filter_site" placeholder="Research Sites" style="width: 93%; padding: 5px; text-align: left;" />
                <div class="pi_section">
                    <input type="text" class="filter_input" id="filter_pi_main" placeholder="Principle Investigator" style="width: 50%; padding: 5px; text-align: left;" />
                    <input type="text" class="filter_input" id="filter_pi_sub" placeholder="Co-PIs" style="width: 38%; padding: 5px; text-align: left;" />
                </div>
                <input type="text" class="filter_input" id="filter_colabs" placeholder="Collaborators" style="width: 93%; padding: 5px; text-align: left;" hidden />
                <div class="fund_section">
                    <input type="text" class="filter_input" id="filter_fun_main" placeholder="Funder" style="width: 50%; padding: 5px; text-align: left;" />
                    <input type="text" class="filter_input" id="filter_fun_time" placeholder="Period" style="width: 38%; padding: 5px; text-align: left;" />
                </div>
                <input type="text" class="filter_input" id="filter_keywords" placeholder="Keywords" style="width: 93%; padding: 5px; text-align: left;" hidden />
            </div>
        </div>

        <section class="Map_interface">

            <section class="map_container">

                <div class="map_container" id="items_main">
                    <div class="Filters_Pane" id="items_main2">
                        <div class="f_header">
                            <div class="main_header" style="text-align:center;">
                                <name>Research Facility</name>
                            </div>

                            <section class="data_header" id="data_header">

                                <header id="rname" style="font-size:large; text-align:center;">Storied lives: An impact study of COVID-19 on seniors and their community support services</header>
                                <div id="pi_section" style="text-align:center;">
                                    <div id="PI_field" style="padding:3px;">
                                        <div class="research_details">Alf Coles (University of Bristol) and Kate Le Roux (University of Cape Town, SA)</div>
                                    </div>
                                    <div id="Co_PI_field" style="padding:3px;">
                                        <div class="research_details">Nathalie Sinclair, Elizabeth de Freitas, Armando Solares, Oi-Lam Ng, Sally Wai-yan Wan, Tracy Hellwell, Julian Brown, Mark Boylan, Elaine Simmt, Stephanie La France</div>
                                    </div>
                                </div>

                                <div id="collab_field" style="padding:3px;">
                                    <div class="research_details">Sandy Banks (SFU)</div>
                                </div>

                                <div id="fund_section" style="text-align:center;">
                                    <div id="funder_main" style="padding:2px; display:inline-block; width:43%;">
                                        <div class="research_details">Funder</div>
                                    </div>
                                    <div id="funder_period" style="padding: 2px;display:inline-block; width: 43%;">
                                        <div class="research_details">Period</div>
                                    </div>
                                </div>

                                <div id="poi_keywords" style="padding: 3px; display: block;">
                                    <div class="research_details">Keywords</div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>

                <div class="map" id="map">
                    <div class="Settings_Pane">
                        <input type="image" src="https://educdv.ca/sfu-research-db/icons/home-icon.png" id="homebtn">
                        <input type="image" src="https://educdv.ca/sfu-research-db/icons/search-icon.png" id="settingsbtn">

                        <section id="options_meta" style="width:106%; display:flex; z-index:1000;">

                            <div class="map_container" id="filters_pc">
                                <div class="Filters_Pane">
                                    <div class="f_header">
                                        Filter Options

                                        <input type="text" class="filter_input" id="filter_search" placeholder="Project Name" style="width:93%;padding:5px;text-align:left;" hidden />
                                        <input type="text" class="filter_input" id="filter_site" placeholder="Research Sites" style="width: 93%; padding: 5px; text-align: left;" />
                                        <div class="pi_section">
                                            <input type="text" class="filter_input" id="filter_pi_main" maxlength="140" placeholder="Principle Investigator" style="width: 94%; padding: 5px; text-align: left;" />
                                            <input type="text" class="filter_input" id="filter_pi_sub" placeholder="Co-PIs" style="width: 93%; padding: 5px; text-align: left;" />
                                        </div>
                                        <input type="text" class="filter_input" id="filter_colabs" placeholder="Collaborators" style="width: 93%; padding: 5px; text-align: left;" hidden />
                                        <div class="fund_section">
                                            <input type="text" class="filter_input" id="filter_fun_main" placeholder="Funder" style="width: 93%; padding: 5px; text-align: left;" />
                                            <input type="text" class="filter_input" id="filter_fun_time" placeholder="Period" style="width: 93%; padding: 5px; text-align: left;" />
                                        </div>
                                        <input type="text" class="filter_input" id="filter_keywords" placeholder="Keywords" style="width: 93%; padding: 5px; text-align: left;" hidden />
                                    </div>
                                </div>
                            </div>
                        </section>

                    </div>

                    <div class="img_col_header" id="image_display" style="height: 85vh; width: 400px; position: relative; top: 22px; right: -13px; z-index: 1000; overflow-y:scroll; overflow-x:hidden;" onmouseover="disableView()" onmouseout="enableView()" onscroll="updatepos()">
                        <div class="img_collection">
                        </div>
                    </div>

                </div>

            </section>

        </section>

			`;
			
			console.log(container)
            // console.log(html);
			newNode = document.createRange().createContextualFragment(html);
			container.appendChild(newNode);
	}

}

init_main();