// https://api.example.com/users?page=2&limit=10

function runUrlDemo(): void {
  const apiUrl = new URL("https://api.acedevhub.com/users?page=2&limit=10&sort=latest");
  console.log("Full URL: ", apiUrl.href);
  console.log("Protocol: ", apiUrl.protocol);
  console.log("Host name: ", apiUrl.hostname);
  console.log("Pathname: ", apiUrl.pathname);
  console.log("Search: ", apiUrl.search);

  const page = apiUrl.searchParams.get("page");
  const limit = apiUrl.searchParams.get("limit");
  const sort = apiUrl.searchParams.get("sort");
  console.log(`URL params: page=${page}, limit=${limit}, sort=${sort}`);

  apiUrl.searchParams.set("page", "10");
  apiUrl.searchParams.set("limit", "20");
  console.log("URL after update: ", apiUrl.href);

  const queryParams = new URLSearchParams({
    search: "node js",
    page: "1",
    limit: "5"
  });

  console.log(queryParams.toString());
}

runUrlDemo();