import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import YoutubeModal from '../../Modals/YoutubeModal';
import { AppContext } from '../../../../context/AppContext';
import { testContextValues } from '../../../../__test__/test-utils';

const contextValues = {
  ...testContextValues,
  chosenYoutubeId: 'wfewef',
};
describe('Tests for Button component', () => {
  it('should backdrop in document', () => {
    render(
      <AppContext.Provider value={contextValues}>
        <YoutubeModal />
      </AppContext.Provider>
    );

    const backdrop = screen.getByRole('status');
    expect(backdrop).toBeInTheDocument();

    userEvent.click(backdrop);
    expect(contextValues.setChosenYoutubeId).toBeCalledTimes(1);
  });

  it('should modal in document', () => {
    render(
      <AppContext.Provider value={contextValues}>
        <YoutubeModal />
      </AppContext.Provider>
    );

    const modal = screen.getByRole('dialog');
    const buttonClose = screen.getByRole('button');
    expect(modal).toBeInTheDocument();

    userEvent.click(buttonClose);
    expect(contextValues.setChosenYoutubeId).toBeCalledTimes(1);
  });
});
