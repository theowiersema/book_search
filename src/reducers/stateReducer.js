const stateReducer = (prevState,action) => {
	switch(action.type) {
		case 'error': return {...prevState,error:true};
		case 'newSearch': return {...prevState, hasInitSearch:true, page:1}
		case 'getMoreResults': return {...prevState, page:prevState.page+1}
		case 'loadingResults': return {...prevState, loading:true};
		case 'finishedLoadingResults': return {...prevState, loading: false};
		case 'showBookDetails': return {...prevState, openBook: action.bookId};
		case 'hideBookDetails': return {...prevState, openBook: null};
		default: throw new Error();
	}
}

export default stateReducer;