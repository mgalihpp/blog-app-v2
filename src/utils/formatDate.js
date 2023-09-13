// Function to format the time difference as "X seconds ago"
export default function formatTimeDifference(createdAt) {
  const currentTime = new Date();
  const postTime = new Date(createdAt);

  const timeDifferenceInSeconds = Math.floor((currentTime - postTime) / 1000);

  if (timeDifferenceInSeconds < 60) {
    return `${timeDifferenceInSeconds} second${
      timeDifferenceInSeconds !== 1 ? "s" : ""
    } ago`;
  }

  const timeDifferenceInMinutes = Math.floor(timeDifferenceInSeconds / 60);

  if (timeDifferenceInMinutes < 60) {
    return `${timeDifferenceInMinutes} minute${
      timeDifferenceInMinutes !== 1 ? "s" : ""
    } ago`;
  }

  const timeDifferenceInHours = Math.floor(timeDifferenceInMinutes / 60);

  if (timeDifferenceInHours < 24) {
    return `${timeDifferenceInHours} hour${
      timeDifferenceInHours !== 1 ? "s" : ""
    } ago`;
  }

  const timeDifferenceInDays = Math.floor(timeDifferenceInHours / 24);

  if (timeDifferenceInDays < 365) {
    return `${timeDifferenceInDays} day${
      timeDifferenceInDays !== 1 ? "s" : ""
    } ago`;
  }

  const timeDifferenceInYears = Math.floor(timeDifferenceInDays / 365);

  return `${timeDifferenceInYears} year${
    timeDifferenceInYears !== 1 ? "s" : ""
  } ago`;
}
