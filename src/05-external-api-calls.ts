const API_URL = "https://jsonplaceholder.typicode.com/users/1";

type PlaceholderUser = {
  id: number;
  name: string;
  email: string;
  company: {
    name: string;
  }
}

type PublicUser = {
  id: number;
  name: string;
  email: string;
  company: string;
}

function transformUser(rawData: PlaceholderUser): PublicUser {
  return {
    id: rawData.id,
    name: rawData.name,
    email: rawData.email,
    company: rawData.company.name
  }
}

async function fetchExternalUser(): Promise<void> {
  // AbortController let us interrupt an in-progress fetch request
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 5000);

  try {
    const response = await fetch(API_URL, { 
      method: "GET",
      signal: controller.signal
    });

    if (!response.ok) {
      console.error(`Upstream API call failed. HTTP status: ${response.status}`);
      return;
    }

    const rawUser = (await response.json()) as PlaceholderUser;
    const user = transformUser(rawUser);
    console.log("User: ", user);
  } catch (error) {
    if (error instanceof Error && error.name === "AbortError") {
      console.error("Request aborted! API call took too long!");
      return;
    }

    const message = error instanceof Error ? error.message : "Unknown error";
    console.error(`API call failed! ${message}`);
  } finally {
    clearTimeout(timer);
  }
}

fetchExternalUser();