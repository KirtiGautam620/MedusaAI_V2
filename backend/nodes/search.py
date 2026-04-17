from duckduckgo_search import DDGS

def search_node(state): 
    results = []

    try:
        with DDGS() as ddgs:
            for q in state["search_queries"]:
                for r in ddgs.text(q, max_results=3):
                    results.append(r)
    except:
        state["errors"].append("Search failed")

    state["results"] = results
    return state