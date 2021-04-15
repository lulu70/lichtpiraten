const createChunks = ({ arr, size }) =>
  arr.reduce((acc, e, i) => {
    i % size ? acc[acc.length - 1].push(e) : acc.push([e])
    return acc
  }, [])

export default createChunks
