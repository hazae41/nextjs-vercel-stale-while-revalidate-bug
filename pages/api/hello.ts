export default function handler(req, res) {
    res.setHeader('Cache-Control', 'max-age=0, s-maxage=5, stale-while-revalidate=2678400')
    res.status(200).json({ hello: "world" })
}
