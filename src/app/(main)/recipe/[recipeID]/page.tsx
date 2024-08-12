import React from "react";

export default function RecipePage({ params }: { params: { recipeID: string } }) {
	return <div>RecipePage recipe:{params.recipeID}</div>;
}
