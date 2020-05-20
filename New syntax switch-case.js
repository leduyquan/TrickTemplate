// Example 1:
convertName(module) {
	switch(module){
		case "a":
			return "aaa";
		case "b":
			return "bbb";
		case "c":
			return "ccc";
		case "d":
			return "ddd";
	}
}

// you can also do this
convertName(module) {
	return {
		"a": "aaa",
		"b": "bbb",
		"c": "ccc",
		"d": "dd",
	}[module]
}


// Example 2:
fetchData(a, b, section){
	switch (section.id) {
		case 'traffic': {
			self._fetchTrafficData(a, b);
			return;
		}
		case 'sales': {
			self._fetchSalesData(a, b);
			return;
		}
		case 'demographics': {
			self._fetchDemographicsData(a, b);
			return;
		}
		case 'heatmap': {
			self._fetchHeatmapData(a, b);
			return;
		}
		case 'staff': {
			self._fetchStaffData(a, b);
			return;
		}
		default: {}
	}
}

// you can also do this
fetchData(a, b, section) {
	return {
		traffic: self._fetchTrafficData,
		sales: self._fetchSalesData,
		demographics: self._fetchDemographicsData,
		heatmap: self._fetchHeatmapData,
		staff: self._fetchStaffData,
	}[section.id](a, b);
}
