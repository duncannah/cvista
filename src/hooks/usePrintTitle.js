import {useEffect} from "react";

// This hook will change the title of the page when the user prints the page.
export default (title) => {
	useEffect(() => {
		if (!title) return;

		const beforePrint = () => {
			const originalTitle = document.title;

			document.title = title;

			const restoreTitle = () => {
				document.title = originalTitle;
				window.removeEventListener("afterprint", restoreTitle);
			};

			window.addEventListener("afterprint", restoreTitle);
		};

		window.addEventListener("beforeprint", beforePrint);

		return () => {
			window.removeEventListener("beforeprint", beforePrint);
		};
	}, [title]);
};
