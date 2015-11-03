    var hallo = React.createClass({
        render : () => {
            return (
                <div>
                  <h>hallo</h>
                </div>
                );
        }
    });
    ReactDOM.render(
        <hallo />,
        document.getElementById('app')
        );
