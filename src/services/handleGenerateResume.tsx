export const handleGenerateResume = async (state: any) => {
  try {
    const response = await fetch("http://localhost:3000/build-resume", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(state), // 👈 your resume JSON
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error generating resume:", error);
  }
};
