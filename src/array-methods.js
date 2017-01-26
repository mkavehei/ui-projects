export const colors = [
	{
		color: "red",
		value: "#f00",
    mutiplier: 100
	},
	{
		color: "green",
		value: "#0f0",
    mutiplier: 100
	},
	{
		color: "blue",
		value: "#00f",
    mutiplier: 200
	},
	{
		color: "cyan",
		value: "#0ff",
    mutiplier: 100
	},
	{
		color: "magenta",
		value: "#f0f",
    mutiplier: 200
	},
	{
		color: "yellow",
		value: "#ff0",
    mutiplier: 100
	},
	{
		color: "black",
		value: "#000",
    mutiplier: 100
	}
];

export const sortedColorsArr = [
	{
		color: "black",
		value: "#000",
    mutiplier: 100
	},
	{
		color: "blue",
		value: "#00f",
    mutiplier: 200
	},
	{
		color: "cyan",
		value: "#0ff",
    mutiplier: 100
	},
	{
		color: "green",
		value: "#0f0",
    mutiplier: 100
	},
	{
		color: "magenta",
		value: "#f0f",
    mutiplier: 200
	},
	{
		color: "red",
		value: "#f00",
    mutiplier: 100
	},
	{
		color: "yellow",
		value: "#ff0",
    mutiplier: 100
	}

];

// Arrary: filter
export function selectedColors(multilier) {
	const selectedColors = colors.filter( (color) => {
		if (color.mutiplier === multilier) {
			return true;
		}
	});
	return selectedColors;
};

// Array: map
export function updatedColors(color, x) {
	 const newmulti = colors.map( obj => {
		   if ( color === '' ) {
          return obj.mutiplier * x;
			 } else {
				   if ( obj.color === color ) {
              return obj.mutiplier * x;
					 } else {
							return obj.mutiplier;
					 }
			 }
	 });	 
	 return newmulti;
};

// Array sort
export function sortedColors(type) {
	 const sorted = colors.sort( (a, b) => {
       if ( type === 'color' ) {
		       a.color > b.color ? 1 : -1;
			 } else if ( type === 'value' ) {
           a.value > b.value ? 1 : -1;
			 }		 
	 });		 
	 return sorted;
};


// Array reduce
export function reducedColors() {
	 const totalMutiplier = colors.reduce( (tot, color) => {
       tot += color.mutiplier;
			 return tot;	 
	 } , 0);	
	 return totalMutiplier;
};

// Array some
export function hasColor(colorName) {
	 return colors.some( (color) => color.value === colorName );
};

// Array find
export function findMultiplier(mutiplier) {
	 return colors.find( (color) => color.mutiplier ===  mutiplier );
};

// Array findIndex
export function findIndexColor(value) {
	 return colors.findIndex( (color) => color.value === value);
};

