import {useState} from "react";

function App() {

    const [areaWidth, setAreaWidth] = useState(0);
    const [areaHeight, setAreaHeight] = useState(0);
    const [addedArea, setAddedArea] = useState(10);

    const [area, setArea] = useState(0);

    const [tileWidth, setTileWidth] = useState(0);
    const [tileHeight, setTileHeight] = useState(0);
    const [boxOrPiece, setBoxOrPiece] = useState('');
    const [price, setPrice] = useState(0);
    const [tilesInBox, setTilesInBox] = useState(0);
    const [tilesNeeded, setTilesNeeded] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);


    const calculate = (obj) => {
        const data = {
            areaWidth,
            areaHeight,
            addedArea,
            tileWidth,
            tileHeight,
            boxOrPiece,
            price,
            tilesInBox
        };
        const updData = {...data, ...obj};
        const totalArea = Math.ceil(updData.areaWidth * updData.areaHeight * (1 + updData.addedArea / 100));
        setArea(totalArea);

        const needTiles = Math.ceil(totalArea * 12 / (updData.tileWidth * updData.tileHeight));
        setTilesNeeded(needTiles);

        setTotalPrice(updData.boxOrPiece === 'piece' ? needTiles * updData.price : Math.ceil(needTiles/updData.tilesInBox) * updData.price);
    }

    function areaWidthHandler(e) {
        setAreaWidth(+e.target.value)
        calculate({areaWidth: +e.target.value});
    }

    function areaHeightHandler(e) {
        setAreaHeight(+e.target.value);
        calculate({areaHeight: +e.target.value});
    }

    function addedAreaHandler(e) {
        setAddedArea(+e.target.value);
        calculate({addedArea: +e.target.value});
    }

    function tileWidthHandler(e) {
        setTileWidth(+e.target.value);
        calculate({tileWidth: +e.target.value});
    }

    function tileHeightHandler(e) {
        setTileHeight(+e.target.value);
        calculate({tileHeight: +e.target.value});
    }

    function boxOrPieceHandler(e) {
        setBoxOrPiece(e.target.value);
        calculate({boxOrPiece: e.target.value});
    }

    function priceHandler(e) {
        setPrice(+e.target.value);
        calculate({price: +e.target.value});
    }

    function tilesInBoxHandler(e) {
        setTilesInBox(+e.target.value);
        calculate({tilesInBox: +e.target.value});
    }

    return (
        <div className="container">
            <h1 className="text-center m-5">Tile Calculator</h1>
            <div className="row mb-5">
                <div className="input-group mb-3 col-md">
                    <span className="input-group-text" id="basic-addon1">Area Width</span>
                    <input
                        type="number"
                        className="form-control"
                        aria-label="Area Width"
                        aria-describedby="basic-addon1"
                        value={areaWidth}
                        onChange={e => areaWidthHandler(e)}
                    />
                </div>
                <div className="input-group mb-3 col-md">
                    <span className="input-group-text" id="basic-addon1">Area Height</span>
                    <input
                        type="number"
                        className="form-control"
                        aria-label="Area Height"
                        aria-describedby="basic-addon1"
                        value={areaHeight}
                        onChange={e => areaHeightHandler(e)}
                    />
                </div>
                <div className="input-group mb-3 col-md">
                    <span className="input-group-text" id="basic-addon1">Added Area</span>
                    <input
                        type="number"
                        className="form-control"
                        aria-label="Added Area"
                        aria-describedby="basic-addon1"
                        value={addedArea}
                        onChange={e => addedAreaHandler(e)}
                    />
                </div>
            </div>
            <div className="row mb-5">
                <div className="input-group mb-3 col-md">
                    <span className="input-group-text" id="basic-addon1">Tile Width</span>
                    <input
                        type="number"
                        className="form-control"
                        aria-label="Tile Width"
                        aria-describedby="basic-addon1"
                        value={tileWidth}
                        onChange={e => tileWidthHandler(e)}
                    />
                </div>
                <div className="input-group mb-3 col-md">
                    <span className="input-group-text" id="basic-addon1">Tile Height</span>
                    <input
                        type="number"
                        className="form-control"
                        aria-label="Tile Height"
                        aria-describedby="basic-addon1"
                        value={tileHeight}
                        onChange={e => tileHeightHandler(e)}
                    />
                </div>
                <div className="input-group mb-3 col-md">
                    <span className="input-group-text" id="basic-addon1">Buying Method</span>
                    <select
                        className="form-select"
                        aria-label="Buying Method"
                        value={boxOrPiece}
                        onChange={e => boxOrPieceHandler(e)}
                    >
                        <option selected>select buying method</option>
                        <option value="piece">Piece</option>
                        <option value="box">Box</option>
                    </select>
                </div>
                <div className="input-group mb-3 col-md">
                    <span className="input-group-text" id="basic-addon1">Price per {boxOrPiece}</span>
                    <input
                        type="number"
                        className="form-control"
                        aria-label="Price"
                        aria-describedby="basic-addon1"
                        value={price}
                        onChange={e => priceHandler(e)}
                    />
                </div>
            </div>
            {boxOrPiece === 'box' &&
            (<div className="input-group mb-3 w-25 mb-5">
                <span className="input-group-text" id="basic-addon1">Tiles in Box</span>
                <input
                    type="number"
                    className="form-control"
                    aria-label="Tiles in Box"
                    aria-describedby="basic-addon1"
                    value={tilesInBox}
                    onChange={e => tilesInBoxHandler(e)}
                />
            </div>)
            }
            <hr/>
            <h5>Total Area: {area} sq ft</h5>
            <h5>Total Tiles Needed: {tilesNeeded} pieces</h5>
            <h5>Total Price: ${totalPrice}</h5>
        </div>
    );
}

export default App;
