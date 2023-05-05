import { render } from '../../test-utils';
import ChessControls from './ChessControls';

const handleReportLocation = () => {}

test('renders without error', () => {
  render(<ChessControls handleReportLocation={handleReportLocation} />);
});