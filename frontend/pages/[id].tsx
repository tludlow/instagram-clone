import Layout from '@/components/Layout'
import { useRouter } from 'next/router'
import Grid from '@/icons/Grid'

export default function ProfilePage() {
    const router = useRouter()
    const { id } = router.query

    return (
        <Layout title={typeof id !== undefined ? '@' + id : 'Instagram'} contained>
            <section className="max-w-4xl mx-auto flex border-b border-gray-300 pb-8">
                <img
                    className="h-32 w-32 rounded-full mr-24"
                    src="https://scontent-lhr8-1.cdninstagram.com/v/t51.2885-19/s150x150/101454719_180905169948630_6306740079209480192_n.jpg?_nc_ht=scontent-lhr8-1.cdninstagram.com&_nc_ohc=1jvskeYIG14AX95QkyI&oh=198a50634afcea50b4150241907fbd61&oe=5F411195"
                    alt=""
                />
                <div>
                    <div className="flex items-start space-x-4">
                        <h3 className="font-light text-2xl">{id}</h3>
                        <button className="font-semibold px-2 py-1 border border-gray-300 rounded">Edit Profile</button>
                    </div>
                    <div className="mt-6 flex space-x-4">
                        <p>
                            <span className="font-semibold">0</span> posts
                        </p>
                        <p>
                            <span className="font-semibold">200</span> followers
                        </p>
                        <p>
                            <span className="font-semibold">500</span> following
                        </p>
                    </div>
                </div>
            </section>
            <div className="w-full -mt-px flex justify-center space-x-6">
                <div className="py-3 px-2 text-black flex items-center border-t border-gray-500 text-sm cursor-pointer">
                    <Grid className="h-4 w-4 mr-1" /> <span>Posts</span>
                </div>
                <div className="py-3 px-2 text-gray-400 text-sm cursor-pointer">
                    <span>Tagged</span>
                </div>
            </div>
        </Layout>
    )
}
