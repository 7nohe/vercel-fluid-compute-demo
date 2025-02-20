async function measureResponseTime(url: string): Promise<void> {
  const startTime = Date.now();
  try {
    const response = await fetch(url);
    const endTime = Date.now();
    const responseTime = endTime - startTime;
    console.log(`Status: ${response.status}`);
    console.log(`Response Time: ${responseTime} ms`);
  } catch (error) {
    console.error('Error making GET request:', error);
  }
}

const url = process.env.API_URL || 'https://example.com';

measureResponseTime(url);
