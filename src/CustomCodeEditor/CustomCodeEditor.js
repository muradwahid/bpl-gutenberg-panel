import React, { useCallback } from "react";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/theme-monokai";

export const CustomCodeEditor = (props) => {
  const {
    value,
    onChange,
    height = "300px",
    width = "100%",
  } = props;
  const id = Math.floor(Math.random() * 99999999);

  let timeout;
  const debouncedOnChange = useCallback(
    (newVal) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        onChange(newVal);
      }, 600);
    },
    [onChange, timeout]
  );

  return (
    <div>
      <AceEditor
        mode="css"
        theme="monokai"
        name={`advEditor-${id}`}
        // onLoad={this.onLoad}
        onChange={debouncedOnChange}
        fontSize={14}
        lineHeight={19}
        height={height}
        width={width}
        showPrintMargin={true}
        showGutter={true}
        highlightActiveLine={true}
        value={value}
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: true,
          showLineNumbers: true,
          tabSize: 2,
        }}
      />
    </div>
  );
};

