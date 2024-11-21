import { redirect } from 'next/navigation';
import routes from '../routes';

export default function HomePage() {
  return redirect(routes.dashboard.path);
}
