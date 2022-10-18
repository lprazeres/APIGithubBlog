import { Routes, Route } from 'react-router-dom';
import { DefaultLayout } from './layouts/DefaultLayout';
import { PostsGrids } from './pages/postsGrids';
import { Post } from './pages/post';

export function Router() {
    return (

        <Routes>
            <Route path="/" element={<DefaultLayout />}>;
                <Route path="/" element={<PostsGrids />} />
                <Route path="/post" element={<Post />} />
            </Route>
        </Routes>
    );
}