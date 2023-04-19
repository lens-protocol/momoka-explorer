const getDAActionType = (
  action: 'DataAvailabilityComment' | 'DataAvailabilityMirror' | 'DataAvailabilityPost' | undefined
) => {
  if (action === 'DataAvailabilityComment') {
    return 'Comment';
  } else if (action === 'DataAvailabilityMirror') {
    return 'Mirror';
  } else if (action === 'DataAvailabilityPost') {
    return 'Post';
  }
  return '';
};

export default getDAActionType;
