export async function GET() {
    return Response.json({success:true, data:"Thank YOU!"}, {status:200})
}

export async function POST(request: Request) {
    const { type, role, level, techstack, amount, userid } = await request.json()
    try {
        
    } catch (error) {
        console.error(error)

        return Response.json({success:false, error}, {status: 500})
    }
}