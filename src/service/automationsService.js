let fakeJobs = [];

const createFakeJob = ({ socialAccountId, type, params }) => {
  const job = {
    id: fakeJobs.length + 1,
    socialAccountId,
    type,
    params,
    status: 'scheduled',
    createdAt: new Date().toISOString()
  };
  fakeJobs.push(job);
  return job;
};

const listFakeJobs = () => fakeJobs;

module.exports = {
  createFakeJob,
  listFakeJobs
};
