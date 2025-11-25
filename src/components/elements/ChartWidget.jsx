const ChartWidget = ({ shouldCrash }) => {
  if (shouldCrash) {
    throw new Error("chart gagal dimuat: data corrupt");
  }

  return (
    <div className="p-12 h-screen">
      <p>grafik berhasil ditampilkan</p>
    </div>
  )
}

export default ChartWidget;