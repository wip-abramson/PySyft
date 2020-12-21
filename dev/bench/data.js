window.BENCHMARK_DATA = {
  "lastUpdate": 1608566331548,
  "repoUrl": "https://github.com/wip-abramson/PySyft",
  "entries": {
    "Python Benchmark with pytestbenchmark": [
      {
        "commit": {
          "author": {
            "email": "murarugeorgec@gmail.com",
            "name": "George-Cristian Muraru",
            "username": "gmuraru"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "489972a9e467eb20a7ebbe2b5e37c63b3d5bb2aa",
          "message": "Reduce length of AST message (#4659)\n\n* Reduce length of AST message\r\n\r\n* Add serde test",
          "timestamp": "2020-10-19T21:21:57+03:00",
          "tree_id": "2c49032c68ffbf403cb3456bd9f406ff38b81c3d",
          "url": "https://github.com/OpenMined/PySyft/commit/489972a9e467eb20a7ebbe2b5e37c63b3d5bb2aa"
        },
        "date": 1603132096820,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/frameworks/torch/mpc/pytestbenchmark/bench.py::test_sigmoid_exp",
            "value": 0.053332067672631885,
            "unit": "iter/sec",
            "range": "stddev: 0.27892963902512324",
            "extra": "mean: 18.750444969399986 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/frameworks/torch/mpc/pytestbenchmark/bench.py::test_tanh_sigmoid",
            "value": 0.8307699868619418,
            "unit": "iter/sec",
            "range": "stddev: 0.009560454437668446",
            "extra": "mean: 1.203702608200001 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/frameworks/torch/mpc/pytestbenchmark/bench.py::test_sigmoid_maclaurin",
            "value": 12.454314864264312,
            "unit": "iter/sec",
            "range": "stddev: 0.0003790655417404274",
            "extra": "mean: 80.29345740000053 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/frameworks/torch/mpc/pytestbenchmark/bench.py::test_tanh_chebyshev",
            "value": 0.8564558058483747,
            "unit": "iter/sec",
            "range": "stddev: 0.03156544430210352",
            "extra": "mean: 1.1676025700000197 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/frameworks/torch/mpc/pytestbenchmark/bench.py::test_sigmoid_chebyshev",
            "value": 0.8658567902540187,
            "unit": "iter/sec",
            "range": "stddev: 0.03555611755453424",
            "extra": "mean: 1.1549254001999885 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kevivthapion@gmail.com",
            "name": "Vivek Pothina",
            "username": "ViveK-PothinA"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f1d55314dacb8300e2bd6d3c595883c0cb5336f6",
          "message": "changed all asset to if/raise to prevent disable of assert during PYTHONOPTIMISE env (#4655)\n\n* changed all asset to if/raise to prevent disable of assert during PYTHONOPTIMISE env\r\n\r\n* minor fix for proper inverson of assert condition\r\n\r\n* Changed to AssertionError which is handled at multiple places\r\n\r\n* Changed to AssertionError which is handled at multiple places\r\n\r\n* added simple test case in test_string to increase test coverage\r\n\r\n* added simple test cases in test_string to increase test coverage\r\n\r\n* added simple test cases to increase test coverage\r\n\r\n* Either None OR More than One worker result found\r\n\r\n* changes for review comments\r\n\r\n* removed comments, minor changes\r\n\r\nCo-authored-by: Vivek Pothina <vivek.pothina@ninjacart.com>",
          "timestamp": "2020-10-20T16:14:40+03:00",
          "tree_id": "11bfbaa619e44305fcae4d76769df1865f5e6f59",
          "url": "https://github.com/OpenMined/PySyft/commit/f1d55314dacb8300e2bd6d3c595883c0cb5336f6"
        },
        "date": 1603200068318,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/frameworks/torch/mpc/pytestbenchmark/bench.py::test_sigmoid_chebyshev",
            "value": 0.8371058374301785,
            "unit": "iter/sec",
            "range": "stddev: 0.02925063381994206",
            "extra": "mean: 1.1945920757999828 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/frameworks/torch/mpc/pytestbenchmark/bench.py::test_tanh_chebyshev",
            "value": 0.8482763921188635,
            "unit": "iter/sec",
            "range": "stddev: 0.051263506141909214",
            "extra": "mean: 1.1788610519999907 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/frameworks/torch/mpc/pytestbenchmark/bench.py::test_sigmoid_exp",
            "value": 0.05225905011062059,
            "unit": "iter/sec",
            "range": "stddev: 0.19437782338265033",
            "extra": "mean: 19.13544157199999 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/frameworks/torch/mpc/pytestbenchmark/bench.py::test_sigmoid_maclaurin",
            "value": 12.579877662953313,
            "unit": "iter/sec",
            "range": "stddev: 0.000431575497002569",
            "extra": "mean: 79.492029000005 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/frameworks/torch/mpc/pytestbenchmark/bench.py::test_tanh_sigmoid",
            "value": 0.8244862452404306,
            "unit": "iter/sec",
            "range": "stddev: 0.03749463073792496",
            "extra": "mean: 1.2128765103999855 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rladhkstn8@gmail.com",
            "name": "Wansoo Kim",
            "username": "marload"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d811ef1e91e5e2c84fbbf1edf61e6983380b4d16",
          "message": "fix C408 (#4714)",
          "timestamp": "2020-10-26T15:31:40+02:00",
          "tree_id": "7db2dad963525036d86878c80a06636fc6668eae",
          "url": "https://github.com/OpenMined/PySyft/commit/d811ef1e91e5e2c84fbbf1edf61e6983380b4d16"
        },
        "date": 1603719792876,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/frameworks/torch/mpc/pytestbenchmark/bench.py::test_sigmoid_maclaurin",
            "value": 12.455787598056613,
            "unit": "iter/sec",
            "range": "stddev: 0.00045463175625117355",
            "extra": "mean: 80.28396374999384 msec\nrounds: 12"
          },
          {
            "name": "benchmarks/frameworks/torch/mpc/pytestbenchmark/bench.py::test_sigmoid_exp",
            "value": 0.051801081478899884,
            "unit": "iter/sec",
            "range": "stddev: 0.13785062743523468",
            "extra": "mean: 19.304616263800007 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/frameworks/torch/mpc/pytestbenchmark/bench.py::test_sigmoid_chebyshev",
            "value": 0.8173405065642716,
            "unit": "iter/sec",
            "range": "stddev: 0.020007859500412593",
            "extra": "mean: 1.2234802899999977 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/frameworks/torch/mpc/pytestbenchmark/bench.py::test_tanh_sigmoid",
            "value": 0.8049765682566539,
            "unit": "iter/sec",
            "range": "stddev: 0.015185792705637212",
            "extra": "mean: 1.2422721845999944 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/frameworks/torch/mpc/pytestbenchmark/bench.py::test_tanh_chebyshev",
            "value": 0.8287430129408001,
            "unit": "iter/sec",
            "range": "stddev: 0.006991693104589301",
            "extra": "mean: 1.2066466737999917 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "anubhavraj.08@gmail.com",
            "name": "Anubhav Raj Singh",
            "username": "aanurraj"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d2bbbc994aa7e7428d9686c3c160e3bcaff881d6",
          "message": "fix comparison between FPT and AST (#4752)\n\n* fixed comparison in AST and added tests\r\n\r\n* added seperate test cases\r\n\r\n* bugs fixed\r\n\r\n* clean\r\n\r\n* improved tests",
          "timestamp": "2020-11-05T18:29:49+05:30",
          "tree_id": "40012e289d445f25e2cbf3f4a9ee3aee07a49b0d",
          "url": "https://github.com/OpenMined/PySyft/commit/d2bbbc994aa7e7428d9686c3c160e3bcaff881d6"
        },
        "date": 1604581611802,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/frameworks/torch/mpc/pytestbenchmark/bench.py::test_sigmoid_exp",
            "value": 0.04164636665089897,
            "unit": "iter/sec",
            "range": "stddev: 0.16393190407046426",
            "extra": "mean: 24.011698508600013 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/frameworks/torch/mpc/pytestbenchmark/bench.py::test_tanh_sigmoid",
            "value": 0.6570560230706138,
            "unit": "iter/sec",
            "range": "stddev: 0.026808675157999607",
            "extra": "mean: 1.5219402377999813 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/frameworks/torch/mpc/pytestbenchmark/bench.py::test_tanh_chebyshev",
            "value": 0.6630106798273476,
            "unit": "iter/sec",
            "range": "stddev: 0.05985465397211117",
            "extra": "mean: 1.5082713302000001 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/frameworks/torch/mpc/pytestbenchmark/bench.py::test_sigmoid_maclaurin",
            "value": 10.28920131838342,
            "unit": "iter/sec",
            "range": "stddev: 0.0016376953124847332",
            "extra": "mean: 97.18927339999937 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/frameworks/torch/mpc/pytestbenchmark/bench.py::test_sigmoid_chebyshev",
            "value": 0.6585176439313789,
            "unit": "iter/sec",
            "range": "stddev: 0.023097390537443672",
            "extra": "mean: 1.5185621968000078 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "xvtongye1986@163.com",
            "name": "xvtongye",
            "username": "xutongye"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4575a50f38b78728dafe2615aad9145dae17b085",
          "message": "Add .ndim and .T to Tensor (OpenMined#4617) (#4773)\n\n* Add .ndim and .T to FixPrecisionTensor and PointerTensor (OpenMined#4617)\r\n\r\n* Add .ndim and .T to FixPrecisionTensor PointerTensor (OpenMined#4617)\r\n\r\n* Add .ndim .T to FixPrecisionTensor PointerTensor (OpenMined#4617)\r\n\r\n* Add .ndim .T to FixPrecisionTensor PointerTensor (OpenMined#4617)",
          "timestamp": "2020-11-09T00:26:50+02:00",
          "tree_id": "65cf8c3e8aec061339d8af1e7aaaeba956f0423c",
          "url": "https://github.com/OpenMined/PySyft/commit/4575a50f38b78728dafe2615aad9145dae17b085"
        },
        "date": 1604874786399,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/frameworks/torch/mpc/pytestbenchmark/bench.py::test_sigmoid_maclaurin",
            "value": 12.925640971921919,
            "unit": "iter/sec",
            "range": "stddev: 0.0025414765062902428",
            "extra": "mean: 77.36560238461502 msec\nrounds: 13"
          },
          {
            "name": "benchmarks/frameworks/torch/mpc/pytestbenchmark/bench.py::test_tanh_chebyshev",
            "value": 0.8432242964290496,
            "unit": "iter/sec",
            "range": "stddev: 0.0406869737640078",
            "extra": "mean: 1.1859240823999926 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/frameworks/torch/mpc/pytestbenchmark/bench.py::test_sigmoid_exp",
            "value": 0.05530001352270804,
            "unit": "iter/sec",
            "range": "stddev: 0.29825758696914934",
            "extra": "mean: 18.08317821820001 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/frameworks/torch/mpc/pytestbenchmark/bench.py::test_tanh_sigmoid",
            "value": 0.8805129046135505,
            "unit": "iter/sec",
            "range": "stddev: 0.017556721928650404",
            "extra": "mean: 1.1357016969999905 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/frameworks/torch/mpc/pytestbenchmark/bench.py::test_sigmoid_chebyshev",
            "value": 0.8602497004033761,
            "unit": "iter/sec",
            "range": "stddev: 0.018625928397618976",
            "extra": "mean: 1.1624531801999978 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rladhkstn8@gmail.com",
            "name": "Wansoo Kim",
            "username": "marload"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "35ea7282f484091070e0e2af6754902ec0cf34b1",
          "message": "Add FPT support for mul or div operation with float scalar (#4713)\n\n* fix precision mul float\r\n\r\n* black formatting\r\n\r\n* fix\r\n\r\n* fix\r\n\r\n* fix\r\n\r\n* add test",
          "timestamp": "2020-11-09T19:17:31+01:00",
          "tree_id": "0ef30aa63787ecb10090ec1c3183b4f3df68b1b4",
          "url": "https://github.com/OpenMined/PySyft/commit/35ea7282f484091070e0e2af6754902ec0cf34b1"
        },
        "date": 1604946300783,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/frameworks/torch/mpc/pytestbenchmark/bench.py::test_tanh_sigmoid",
            "value": 0.6833566090402894,
            "unit": "iter/sec",
            "range": "stddev: 0.03828387625193371",
            "extra": "mean: 1.463364789000002 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/frameworks/torch/mpc/pytestbenchmark/bench.py::test_sigmoid_chebyshev",
            "value": 0.6840277454042656,
            "unit": "iter/sec",
            "range": "stddev: 0.038680069763382355",
            "extra": "mean: 1.461929003199998 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/frameworks/torch/mpc/pytestbenchmark/bench.py::test_tanh_chebyshev",
            "value": 0.7018277918328042,
            "unit": "iter/sec",
            "range": "stddev: 0.0200241359279248",
            "extra": "mean: 1.4248509558000364 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/frameworks/torch/mpc/pytestbenchmark/bench.py::test_sigmoid_exp",
            "value": 0.0444034099567238,
            "unit": "iter/sec",
            "range": "stddev: 0.3432671168318469",
            "extra": "mean: 22.520792907000033 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/frameworks/torch/mpc/pytestbenchmark/bench.py::test_sigmoid_maclaurin",
            "value": 11.112433293124251,
            "unit": "iter/sec",
            "range": "stddev: 0.005549676934449934",
            "extra": "mean: 89.98929159995441 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "murarugeorgec@gmail.com",
            "name": "George-Cristian Muraru",
            "username": "gmuraru"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a61f2e71a72e6da6926232079122bef60d51ceb8",
          "message": "Add remote share for RST (#4653)\n\n* Add remote RST\r\n\r\n* Apply suggestions from code review\r\n\r\nCo-authored-by: Théo Ryffel <theo.leffyr@gmail.com>\r\n\r\n* Fix issues\r\n\r\n* Add suggestion\r\n\r\n* Remove comments\r\n\r\n* Fix flake\r\n\r\n* Add syft-proto, tags, description\r\n\r\n* Add rst serde\r\n\r\n* Placeholder serialization\r\n\r\n* Fix flake8 issue\r\n\r\n* Fix comment and hardcoded values for shares\r\n\r\n* Format\r\n\r\n* Update syft/frameworks/torch/tensors/interpreters/replicated_shared.py\r\n\r\nCo-authored-by: Théo Ryffel <theo.leffyr@gmail.com>\r\n\r\n* Update syft/frameworks/torch/tensors/interpreters/additive_shared.py\r\n\r\nCo-authored-by: Théo Ryffel <theo.leffyr@gmail.com>\r\n\r\n* Add worker docstring\r\n\r\n* Add share and send\r\n\r\nCo-authored-by: Théo Ryffel <theo.leffyr@gmail.com>",
          "timestamp": "2020-11-11T12:33:08+05:30",
          "tree_id": "27b835b3609579c8073c7f8542b9717a4a19f60d",
          "url": "https://github.com/OpenMined/PySyft/commit/a61f2e71a72e6da6926232079122bef60d51ceb8"
        },
        "date": 1605078596908,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/frameworks/torch/mpc/pytestbenchmark/bench.py::test_sigmoid_chebyshev",
            "value": 0.6895318676622065,
            "unit": "iter/sec",
            "range": "stddev: 0.014368677584378781",
            "extra": "mean: 1.4502592945999822 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/frameworks/torch/mpc/pytestbenchmark/bench.py::test_sigmoid_maclaurin",
            "value": 10.478751948480209,
            "unit": "iter/sec",
            "range": "stddev: 0.002489611597901318",
            "extra": "mean: 95.43121212493588 msec\nrounds: 8"
          },
          {
            "name": "benchmarks/frameworks/torch/mpc/pytestbenchmark/bench.py::test_sigmoid_exp",
            "value": 0.04253747108596053,
            "unit": "iter/sec",
            "range": "stddev: 0.09995196690096644",
            "extra": "mean: 23.508684801199887 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/frameworks/torch/mpc/pytestbenchmark/bench.py::test_tanh_sigmoid",
            "value": 0.6736763727116021,
            "unit": "iter/sec",
            "range": "stddev: 0.026759087336755236",
            "extra": "mean: 1.4843922697999914 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/frameworks/torch/mpc/pytestbenchmark/bench.py::test_tanh_chebyshev",
            "value": 0.6778461995716487,
            "unit": "iter/sec",
            "range": "stddev: 0.03200058814810675",
            "extra": "mean: 1.4752609082000163 sec\nrounds: 5"
          }
        ]
      }
    ],
    "Pytest-benchmarks": [
      {
        "commit": {
          "author": {
            "email": "wip.abramson@gmail.com",
            "name": "wip-abramson",
            "username": "wip-abramson"
          },
          "committer": {
            "email": "wip.abramson@gmail.com",
            "name": "wip-abramson",
            "username": "wip-abramson"
          },
          "distinct": true,
          "id": "c6bb296107fca6f314ad9ef5d88b299014f7bad1",
          "message": "update duet server code",
          "timestamp": "2020-12-18T17:36:44Z",
          "tree_id": "cf503a699bcebc3ec43b23d539d56db2ce9558ba",
          "url": "https://github.com/wip-abramson/PySyft/commit/c6bb296107fca6f314ad9ef5d88b299014f7bad1"
        },
        "date": 1608327507406,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/pytest_benchmarks/bench_test.py::test_string_serde",
            "value": 1230.6626151452056,
            "unit": "iter/sec",
            "range": "stddev: 0.00011538664025540057",
            "extra": "mean: 812.5703890680146 usec\nrounds: 622"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "wip.abramson@gmail.com",
            "name": "wip-abramson",
            "username": "wip-abramson"
          },
          "committer": {
            "email": "wip.abramson@gmail.com",
            "name": "wip-abramson",
            "username": "wip-abramson"
          },
          "distinct": true,
          "id": "c037156af24a276eeb2e0dda1548fb1361bb4647",
          "message": "Mostly working AriesCredExchanger in notebooks, some msg queueing issues",
          "timestamp": "2020-12-21T15:10:08Z",
          "tree_id": "74d7c1e98017cc1d814be38612c43bfb3cf751b5",
          "url": "https://github.com/wip-abramson/PySyft/commit/c037156af24a276eeb2e0dda1548fb1361bb4647"
        },
        "date": 1608566329848,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/pytest_benchmarks/bench_test.py::test_string_serde",
            "value": 1156.9905946720223,
            "unit": "iter/sec",
            "range": "stddev: 0.00018802302910295068",
            "extra": "mean: 864.3112611330041 usec\nrounds: 494"
          }
        ]
      }
    ]
  }
}